import React from 'react'
import { IHookAxios } from '../../@types/AXIntefaces';
import useAxios from '../../App/hooks/useAxios';
import DataTable from '../../shared/components/global/DataTable'
import PlantillaData from '../../shared/components/plantilla/PlantillaData'

interface Props {
    
}

const RegistroTurnos = (props: Props) => {
    const ApiResponse : IHookAxios = useAxios("POST", "/api/turnos/listar", false);
    return (
        <PlantillaData title="Registro de puestos de trabajo" LinkBtn="/control-de-personal/registro-de-turnos/nuevo">
            <DataTable
                dataSource={ApiResponse.datos}
                columnSource={[
                    "Id_Turno",
                    "nombre_turno",
                ]}
            />
        </PlantillaData>
    )
}

export default RegistroTurnos
