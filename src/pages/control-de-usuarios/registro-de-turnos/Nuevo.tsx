import React from 'react'
import Formulario from '../../../shared/components/global/Formulario'

interface Props {
    
}

const NuevoTurno = (props: Props) => {
    return (
        <Formulario title="Nuevo puesto de trabajo" inputs={[{name:"turno",type:"input",required:true}]} submitAction={(data : any) => console.log(data)}/>
    )
}

export default NuevoTurno
