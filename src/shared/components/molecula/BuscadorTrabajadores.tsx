import { Descriptions, Input } from "antd";
import React from "react";

interface Props {}

const BuscadorTrabajadores = (props: Props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h3>Información de trabajador</h3>
      <Input.Search
        placeholder="Escribe un dni para buscar una trabajador"
        enterButton
      ></Input.Search>
      <Descriptions bordered>
        <Descriptions.Item label="Nombre">Frank Nolasco</Descriptions.Item>
        <Descriptions.Item label="DNI">75566300</Descriptions.Item>
        <Descriptions.Item label="Ciudad">Sullana</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default BuscadorTrabajadores;
