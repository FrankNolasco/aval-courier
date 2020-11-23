import { Button, Card } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import useAxios from '../../App/hooks/useAxios'
import DataTable from '../../shared/components/global/DataTable'
import '../../shared/styles/ordenServicio.css'
function OrdenesServicio() {
    const ApiResponse = useAxios('POST' , '/api/ordenes-de-servicio/listar')
    const { push } = useHistory()
    return (
        <div className="container">
            <Card title = "Registro de ordenes de servicio" extra = {<Button onClick = {()=> push('/control-de-servicio/ordenes-de-servicio/nuevo')}>Nuevo</Button>}>
                <DataTable dataSource = {ApiResponse.datos} columnSource = {[
                    'id_orden' , 'remitente' , 'destinatario'  , 'urbanizacion' , 'calle' , 'numero_casa' , 'fecha_envio' , 'estado_orden'
                ]}/>
            </Card>
        </div>
    )
}

export default OrdenesServicio
