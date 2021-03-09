import { Descriptions, Empty, Input } from "antd";
import React, { useEffect, useState } from "react";
import useAxios from "../../../App/hooks/useAxios";

interface Props {
  Trabajador: any;
  setTrabajador: Function;
}

const BuscadorTrabajadores = ({ Trabajador, setTrabajador }: Props) => {
  const BuscarTrabajador = useAxios("POST", "/api/trabajadores/buscar", true);
  const [reloader, setReloader] = useState(false)
  const Buscar = (dni: string) => {
    BuscarTrabajador.actualizarParametros({ dni });
    BuscarTrabajador.iniciarPeticion();
  };
  useEffect(() => {
    if (BuscarTrabajador.datos.length >= 1) {
      setTrabajador(BuscarTrabajador.datos[0]);
    } else {
      setTrabajador(undefined);
    }
    setReloader(!reloader)
    return () => {};
  //eslint-disable-next-line
  }, [BuscarTrabajador.datos]);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h3>Información de trabajador</h3>
      <Input.Search
        placeholder="Escribe un dni para buscar una trabajador"
        enterButton
        onSearch={Buscar}
      ></Input.Search>
      {Trabajador ? (
        <div style={{ display: "flex" }}>
          <img
            src={Trabajador.Foto}
            width="120px"
            height="auto"
            alt="foto"
            style={{
              objectFit: "contain",
              backgroundColor: "whitesmoke",
              maxHeight: "111px",
            }}
          />
          <Descriptions
            bordered
            column={6}
            style={{ width: "100%" }}
            layout="vertical"
          >
            <Descriptions.Item label="Nombre" span={2}>
              {Trabajador.nombre}
            </Descriptions.Item>
            <Descriptions.Item label="Genero">
              {Trabajador.Genero}
            </Descriptions.Item>
            <Descriptions.Item label="DNI">
              {Trabajador.numero_documento}
            </Descriptions.Item>
            <Descriptions.Item label="Ciudad">
              {Trabajador.nombre_distrito}
            </Descriptions.Item>
            <Descriptions.Item label="Nacionalidad">
              {Trabajador.Nacionalidad}
            </Descriptions.Item>
          </Descriptions>
        </div>
      ) : (
        <Empty description="No se ha encontrado ninguna persona" />
      )}
    </div>
  );
};

export default BuscadorTrabajadores;
