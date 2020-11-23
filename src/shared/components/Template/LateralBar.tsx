import React from "react";
import { useTemplate } from "../../../App/hooks/global/TemplateContext";
import { Menu } from "antd";
import {
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

function LateralBar() {
  const { activeLateralBar } = useTemplate();
  const { SubMenu } = Menu;
  const handleClick = (e: any) => {
    console.log("click ", e);
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
        <SubMenu
          key="sub1"
          title={
            <span>
              <MailOutlined />
              <span>Control de servicio</span>
            </span>
          }
        >
          <Menu.Item key="100">
              <Link to="/control-de-servicio/ordenes-de-servicio">
                Ordenes de servicio
              </Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <SettingOutlined />
              <span>Control de personal</span>
            </span>
          }
        >
            <Menu.Item key="200">
                <Link to="/control-de-personal/registro-de-contribuidores">
                    Registro de personal
                </Link>
            </Menu.Item>
            <Menu.Item key="201">
                <Link to="/control-de-personal/registro-de-mensajeros">
                    Registro de mensajeros
                </Link>
            </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          title={
            <span>
              <SettingOutlined />
              <span>Control de Incidencias</span>
            </span>
          }
        >
            <Menu.Item key="300">
                <Link to="/control-de-incidencias/registro-de-incidencias">
                  Registro de incidencias
                </Link>
            </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <SettingOutlined />
              <span>Control de usuarios</span>
            </span>
          }
        >
          <Menu.Item key="400">
                <Link to="/control-de-usuarios/registro-de-usuarios">
                  Registro de usuarios
                </Link>
            </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
}

export default LateralBar;
