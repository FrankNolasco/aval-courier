import React from 'react'
import Formulario from '../../../shared/components/global/Formulario'
import BuscadorPersonas from '../../../shared/components/molecula/BuscadorPersonas'

interface Props {
    
}

const NuevoMensajero = (props: Props) => {
    return (
        <div>
            <Formulario descripcions={<BuscadorPersonas/>} inputs={[]} submitAction={()=>{}} />
        </div>
    )
}

export default NuevoMensajero
