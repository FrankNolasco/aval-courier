import React from 'react'
import { IHookAxios } from '../../@types/AXIntefaces';
import useAxios from '../../App/hooks/useAxios';
import DataTable from '../../shared/components/global/DataTable';
import PlantillaData from '../../shared/components/plantilla/PlantillaData'

interface Props {
    
}

const RegistroPuestosTrabajo = (props: Props) => {
    const ApiResponse : IHookAxios = useAxios("POST", "/api/puestos-de-trabajo/listar", false);

    return (
        <PlantillaData title="Registro de puestos de trabajo" LinkBtn="/control-de-personal/puestos-de-trabajo/nuevo">
            <DataTable
                dataSource={ApiResponse.datos}
                columnSource={[
                    "id_puesto",
                    "nombre_puesto",
                ]}
            />
        </PlantillaData>
    )
}

export default RegistroPuestosTrabajo
