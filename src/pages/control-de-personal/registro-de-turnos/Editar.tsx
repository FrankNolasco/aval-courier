import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router';
import useAxios from '../../../App/hooks/useAxios';
import useToast from '../../../App/hooks/useToast';
import Formulario from '../../../shared/components/global/Formulario';
import { SUCCESS_MESSAGE, ToastAxiosResponse } from '../../../static/functions/Util';

interface Props {
    
}

const EditarTurno = (props: Props) => {
    const Toast = useToast(SUCCESS_MESSAGE);
    const EditarTurno = useAxios("POST", "/api/turnos/modificar", true);
    const { goBack } = useHistory();
    const { state } : any = useLocation()

    useEffect(() => {
        !state && goBack()
        return () => {}
    }, [state])

    const submitAction = (data : any) => {
        EditarTurno.actualizarParametros({...data,id_turno : state.data.Id_Turno})
        EditarTurno.iniciarPeticion()
    }

    useEffect(() => {
        ToastAxiosResponse(EditarTurno.respuestaServer, Toast);
        EditarTurno.respuestaServer === 200 && goBack();
        return () => {};
    //eslint-disable-next-line
    }, [EditarTurno.respuestaServer]);


    return (
        <Formulario
            title="Nuevo puesto de trabajo"
            inputs={[{ name: "nombre_turno", type: "input", required: true, defaultValue : state.data.nombre_turno }]}
            submitAction={submitAction}
        />
    );
}

export default EditarTurno
