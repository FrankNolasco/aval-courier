import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router";
import useAxios from "../../../App/hooks/useAxios";
import useToast from "../../../App/hooks/useToast";
import Formulario from "../../../shared/components/global/Formulario";
import BuscadorPersonas from "../../../shared/components/molecula/BuscadorPersonas";
import {
  SUCCESS_MESSAGE,
  ToastAxiosResponse,
} from "../../../static/functions/Util";
interface Props {}
const NuevoContribuidor = (props: Props) => {
  const { goBack } = useHistory();
  const [persona, setPersona] = useState<any>();
  const Toast = useToast(SUCCESS_MESSAGE);
  const InsertarTrabajador = useAxios(
    "POST",
    "/api/trabajadores/insertar",
    true
  );
  const ListaSucursales = useAxios("POST", "/api/sucursales/listar");
  const ListaPT = useAxios("POST", "/api/puestos-de-trabajo/listar");

  useEffect(() => {
    ToastAxiosResponse(InsertarTrabajador.respuestaServer, Toast);
    InsertarTrabajador.respuestaServer === 200 && goBack();
    return () => {};
  //eslint-disable-next-line
  }, [InsertarTrabajador.respuestaServer]);

  const guardarTrabajador = (data: any) => {
    if (persona) {
      InsertarTrabajador.actualizarParametros({ ...data, numero_documento: persona.numero_documento });
      InsertarTrabajador.iniciarPeticion()
    } else {
      ToastAxiosResponse(400, Toast);
    }
  };

  return (
    <Formulario
      title="Nuevo Trabajador"
      loading={InsertarTrabajador.cargando}
      descripcions={
        <Fragment>
          <BuscadorPersonas Persona={persona} setPersona={setPersona} />
          <h3 style={{ marginTop: 20 }}>Informacion del trabajo</h3>
        </Fragment>
      }
      inputs={[
        {
          name: "turno",
          type: "dropdown-prime",
          required: true,
          optionsDropdown: ["MAÑANA", "TARDE", "FULL TIME"],
        },
        {
          name: "id_puesto",
          type: "dropdown-prime",
          required: true,
          optionsDropdown: Array.isArray(ListaPT.datos) ? ListaPT.datos : [],
          optionLabel: "nombre_puesto",
          optionValue: "id_puesto",
        },
        {
          name: "id_sucursal",
          type: "dropdown-prime",
          required: true,
          optionsDropdown: Array.isArray(ListaSucursales.datos)
            ? ListaSucursales.datos
            : [],
          optionLabel: "Nombre_Sucursal",
          optionValue: "Id_Sucursal",
        },
      ]}
      submitAction={guardarTrabajador}
    />
  );
};

export default NuevoContribuidor;
