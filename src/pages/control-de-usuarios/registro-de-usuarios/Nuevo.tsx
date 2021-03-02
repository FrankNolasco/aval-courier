import React from 'react'
import Formulario from '../../../shared/components/global/Formulario'
import BuscadorTrabajadores from '../../../shared/components/molecula/BuscadorTrabajadores'

interface Props {
    
}

const NuevoUsuario = (props: Props) => {
    return (
        <div>
            <Formulario title="Nuevo Usuario" descripcions={<BuscadorTrabajadores/>} inputs={[
                {name:"Usuario",type:"input"},
                {name:"Clave",type:"input",customProps:{type:"password"}},
                {name:"Rol",type:"dropdown-prime"}
            ]} submitAction={()=>{}}/>
        </div>
    )
}

export default NuevoUsuario
