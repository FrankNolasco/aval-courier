import React from 'react'
import Formulario from '../../../shared/components/global/Formulario'

interface Props {
    
}

const NuevoPuestoTrabajo = (props: Props) => {
    return (
        <Formulario title="Nuevo puesto de trabajo" inputs={[{name:"puesto_trabajo",type:"input",required:true}]} submitAction={(data : any) => console.log(data)}/>
    )
}

export default NuevoPuestoTrabajo
