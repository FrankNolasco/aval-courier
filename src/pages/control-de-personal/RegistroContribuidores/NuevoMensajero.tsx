import React, { useState } from 'react'
import Formulario from '../../../shared/components/global/Formulario'
import BuscadorPersonas from '../../../shared/components/molecula/BuscadorPersonas'

interface Props {
    
}

const NuevoMensajero = (props: Props) => {
    const [persona, setPersona] = useState()
    return (
        <div>
            <Formulario descripcions={<BuscadorPersonas  Persona={persona} setPersona={setPersona}/>} inputs={[]} submitAction={()=>{}} />
        </div>
    )
}

export default NuevoMensajero
