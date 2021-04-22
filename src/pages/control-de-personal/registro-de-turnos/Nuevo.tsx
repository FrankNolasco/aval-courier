import React, { useEffect } from "react";
import { useHistory } from "react-router";
import useAxios from "../../../App/hooks/useAxios";
import useToast from "../../../App/hooks/useToast";
import Formulario from "../../../shared/components/global/Formulario";
import { SUCCESS_MESSAGE, ToastAxiosResponse } from "../../../static/functions/Util";

interface Props {}



const NuevoTurno = (props: Props) => {
  const Toast = useToast(SUCCESS_MESSAGE);
  const InsertarTurno = useAxios("POST", "/api/turnos/insertar", true);
  const { goBack } = useHistory();

  const submitAction = (data : any) => {
    InsertarTurno.actualizarParametros(data)
    InsertarTurno.iniciarPeticion()
  }

  useEffect(() => {
    ToastAxiosResponse(InsertarTurno.respuestaServer, Toast);
    InsertarTurno.respuestaServer === 200 && goBack();
    return () => {};
  //eslint-disable-next-line
  }, [InsertarTurno.respuestaServer]);


  return (
    <Formulario
      title="Nuevo puesto de trabajo"
      inputs={[{ name: "nombre_turno", type: "input", required: true }]}
      submitAction={submitAction}
    />
  );
};

export default NuevoTurno;