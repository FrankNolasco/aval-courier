import React, { useEffect } from "react";
import useAxios from "../../../App/hooks/useAxios";
import Formulario from "../../../shared/components/global/Formulario";
import { format } from "date-fns";
import { IFormPersona } from "../../../@types/FormsInterfaces";
import useToast from "../../../App/hooks/useToast";
import { useHistory } from "react-router";
import {
  SUCCESS_MESSAGE,
  ToastAxiosResponse,
} from "../../../static/functions/Util";
interface Props {}

const NuevaPersona = (props: Props) => {
  const ListaCiudades = useAxios("POST", "/api/ciudad/listar");
  const InsertaPersona = useAxios("POST", "/api/personas/insertar", true);
  const { goBack } = useHistory();
  const Toast = useToast(SUCCESS_MESSAGE);
  const submitAction = (data: IFormPersona) => {
    InsertaPersona.actualizarParametros({
      ...data,
      fecha_nacimiento: format(data.fecha_nacimiento, "yyyy-MM-dd"),
      distrito_nacimiento: data.distrito_nacimiento.value,
    });
    InsertaPersona.iniciarPeticion();
  };

  useEffect(() => {
    ToastAxiosResponse(InsertaPersona.respuestaServer, Toast);
    InsertaPersona.respuestaServer === 200 && goBack();
    return () => {};
  //eslint-disable-next-line
  }, [InsertaPersona.respuestaServer]);

  return (
    <div>
      <Formulario
        title="Nueva persona"
        inputs={[
          { name: "nombre", required: true, type: "input" },
          {
            name: "numero_documento",
            type: "input",
            required: true,
            customProps: { type: "number" },
          },
          { name: "RUC", type: "input", customProps: { type: "number" } },
          { name: "fecha_nacimiento", type: "calendar", required: true },
          {
            name: "genero",
            type: "dropdown-prime",
            optionsDropdown: ["M", "F"],
          },
          { name: "nacionalidad", type: "input", required: true },
          {
            name: "distrito_nacimiento",
            type: "cascader",
            optionsDropdown: ListaCiudades.datos,
            customProps: {
              optionGroupChildren: ["provincias", "distritos"],
              optionLabel: "ciudad",
              optionGroupLabel: "label",
            },
          },
        ]}
        submitAction={submitAction}
      />
    </div>
  );
};

export default NuevaPersona;
