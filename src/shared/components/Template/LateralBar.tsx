import React from "react";
import { useTemplate } from "../../../App/hooks/global/TemplateContext";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { MenuLateralMap, UnloggedMenu } from "../../../static/data/MenuLateral";
import { MenuProps } from "../../../@types/Intefaces";
import { useUsuario } from "../../../App/hooks/global/UsuarioContext";

const TitleSubMenu = ({icon, title } : {icon : string, title : string}) => <span style={{display:"flex",flexDirection:"row",alignItems:"center",gap:10}}>
  <i className={`fa fa-${icon}`} />
  <span>{title}</span>
</span>

const LateralBar = () => {
  const { activeLateralBar , setActiveLateralBar } = useTemplate();
  const { usuario } = useUsuario()
  const { SubMenu } = Menu;
  const handleClick = (e: any) => {
    setActiveLateralBar(false)
  };
  return (
    <div
      className={`lateralBar${
        activeLateralBar ? " lat-active" : " lat-inactive"
      }`}
    >

      <Menu
        onClick={handleClick}
        style={{ width: "100%" }}
        mode="inline"
      >
      {
        (usuario ? MenuLateralMap : UnloggedMenu).map((menu : MenuProps) => <SubMenu key={menu.key}title={<TitleSubMenu icon={menu.icono} title={menu.title}/>}>
          {
            menu.submenus.map
            (sm => <Menu.Item key={sm.key}>
                <Link to={sm.link}>
                  {sm.title}
                </Link>
            </Menu.Item>)
          }
        </SubMenu> )
      }        
      </Menu>
    </div>
  );
}

export default LateralBar;
