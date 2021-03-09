import React, { useState } from 'react'
import Formulario from '../../../shared/components/global/Formulario'
import BuscadorPersonas from '../../../shared/components/molecula/BuscadorPersonas'

interface Props {
    
}

const NuevaIncidencia = (props: Props) => {
    const [persona, setPersona] = useState()
    return (
        <div>
            <Formulario
            descripcions = {<div>
                <BuscadorPersonas Persona={persona} setPersona={setPersona}/>
                <h3 style={{margin:"15px 0"}}>Informacion de la incidencia</h3>
                </div>}
            inputs={[
                {name:"problema_asociado",type:"input"},
                {name:"tipo_de_incidencia",type:"input"},
                {name:"prioridad",type:"input"},
                {name:"canal_de_entrada",type:"input"},
            ]} submitAction={()=>{}}/>
        </div>
    )
}

export default NuevaIncidencia
