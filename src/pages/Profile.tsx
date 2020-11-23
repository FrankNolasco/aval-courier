import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useUsuario } from '../App/hooks/global/UsuarioContext'
import Logo from '../shared/components/Template/Logo'

function Profile() {
    const { usuario } = useUsuario()
    const [messageActive, setMessageActive] = useState<boolean>(true)
    return (
        <div>
            <div className="Bienvenida-login message-closable" style = {{display : !messageActive ? "none" : "flex"}}>
                Hola {usuario.nombre_usuario}, <Logo/> te da la bienvenida.
                <button className="close-message" onClick = {()=> setMessageActive(false)}>
                    <FontAwesomeIcon icon = {faTimes}/>
                </button>
            </div>
        </div>
    )
}

export default Profile
