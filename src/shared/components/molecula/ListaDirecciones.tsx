import React, { useEffect } from 'react'
import { DataTable } from 'primereact/datatable'
import useAxios from '../../../App/hooks/useAxios'
import { Column } from 'primereact/column'
import { IAXDireccion } from '../../../@types/AXIntefaces'
import { procesarDireccion } from './Direccion'

interface Props {
    numero_documento : string
}

const ListaDirecciones = ({numero_documento}: Props) => {
    const Direcciones  = useAxios("POST","/api/personas/direcciones/listar",true)
    useEffect(() => {
        if(numero_documento !== ""){
            Direcciones.actualizarParametros({numero_documento})
            Direcciones.iniciarPeticion()
        }
        return () => {}
    //eslint-disable-next-line
    }, [numero_documento])
    return (
        <div>
            <DataTable value={Direcciones.datos}>
                <Column header="Direcciones" body={(data : IAXDireccion)=>procesarDireccion(data)}/>
            </DataTable>   
        </div>
    )
}

export default ListaDirecciones
