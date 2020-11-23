import React from "react";
import { Link } from "react-router-dom";
import { useTemplate } from "../../../App/hooks/global/TemplateContext";
import { useUsuario } from "../../../App/hooks/global/UsuarioContext";
import Logo from "./Logo";

function HeaderBar() {
  const { setActiveLateralBar, activeLateralBar } = useTemplate();
  const { usuario  } = useUsuario()
  return (
    <div className="HeaderBar">
      <div>
        <span
          className="btn-burger"
          onClick={() => {setActiveLateralBar(!activeLateralBar)}}
        >
          <i className="fa fa-bars" />
        </span>
        <Logo />
      </div>
      <div className="user-header">
        <i className="fa fa-user"></i>
        {usuario ? 
          <span><Link to="/Perfil">{usuario.nombre_usuario}</Link></span>:
          <span><Link to="/Login">INICIAR SESION</Link></span>
        }
      </div>
    </div>
  );
}

export default HeaderBar;
