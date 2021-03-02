import React from "react";
import { Descriptions, Input } from "antd";

interface Props {}

const BuscadorPersonas = (props: Props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h3>Información de persona</h3>
      <Input.Search placeholder="Escribe un dni para buscar una persona" enterButton></Input.Search>
      <Descriptions bordered>
        <Descriptions.Item label="Nombre">Frank Nolasco</Descriptions.Item>
        <Descriptions.Item label="DNI">75566300</Descriptions.Item>
        <Descriptions.Item label="Ciudad">Sullana</Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default BuscadorPersonas;
