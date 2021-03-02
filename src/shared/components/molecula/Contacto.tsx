import React from 'react'
import { IAXContacto } from '../../../@types/AXIntefaces'

interface Props {
    data : IAXContacto
}

const Contacto = ({data}: Props) => {
    return (
        <div className="molecula-contacto">
            <div>
                <i className="fa fa-bolt"></i>
                <strong>{data.Nombre}</strong> 
            </div>
            <div>
                <span>{data.Detalle_Contacto}</span>
            </div>
        </div>
    )
}

export default Contacto
