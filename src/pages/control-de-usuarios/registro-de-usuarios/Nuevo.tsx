import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import useAxios from "../../../App/hooks/useAxios";
import useToast from "../../../App/hooks/useToast";
import Formulario from "../../../shared/components/global/Formulario";
import BuscadorTrabajadores from "../../../shared/components/molecula/BuscadorTrabajadores";
import {
  SUCCESS_MESSAGE,
  ToastAxiosResponse,
} from "../../../static/functions/Util";

interface Props {}

const NuevoUsuario = (props: Props) => {
  const ListaRoles = useAxios("POST", "/api/roles/listar");
  const [Trabajador, setTrabajador] = useState<any>()
  const InsertarUsuario = useAxios("POST", "/api/usuarios/insertar", true);
  const { goBack } = useHistory();

  const Toast = useToast(SUCCESS_MESSAGE);

  useEffect(() => {
    ToastAxiosResponse(InsertarUsuario.respuestaServer, Toast);
    InsertarUsuario.respuestaServer === 200 && goBack();
    return () => {};
    //eslint-disable-next-line
  }, [InsertarUsuario.respuestaServer]);

  const guardarUsuario = (data: any) => {
    if(Trabajador){
      InsertarUsuario.actualizarParametros({...data, id_trabajador : Trabajador.id_trabajador})
      InsertarUsuario.iniciarPeticion()
    }else{
      ToastAxiosResponse(400,Toast)
    }
  }

  return (
    <div>
      <Formulario
        title="Nuevo Usuario"
        descripcions={<BuscadorTrabajadores Trabajador = {Trabajador} setTrabajador={setTrabajador} />}
        inputs={[
          { name: "Usuario", type: "input" },
          { name: "Clave", type: "input", customProps: { type: "password" } },
          {
            name: "Rol",
            type: "dropdown-prime",
            optionsDropdown: ListaRoles.datos,
            optionLabel: "Nombre",
            optionValue: "Id_Rol"
          },
        ]}
        submitAction={guardarUsuario}
      />
    </div>
  );
};

export default NuevoUsuario;
