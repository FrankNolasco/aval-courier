import React, { useEffect, useState } from "react";
import { Button, Descriptions, Empty, Input } from "antd";
import useAxios from "../../../App/hooks/useAxios";
import { IHABuscadorPersona } from "../../../@types/AXIntefaces";
import { useHistory } from "react-router-dom";
interface Props {
  Persona : any,
  setPersona : Function
}
const BuscadorPersonas = ({Persona,setPersona}: Props) => {
  const [reloader, setReloader] = useState(false)
  const PeticionBuscarPersona: IHABuscadorPersona = useAxios(
    "POST",
    "/api/personas/buscar",
    true
  );
  const { push } = useHistory();
  const Buscar = (dni: string | number) => {
    PeticionBuscarPersona.actualizarParametros({ dni });
    PeticionBuscarPersona.iniciarPeticion();
  };
  useEffect(() => {
    if(PeticionBuscarPersona.datos.length >= 1){
      setPersona(PeticionBuscarPersona.datos[0])
    }else{
      setPersona(undefined)
    }
    setReloader(!reloader)
    return () => {}
  //eslint-disable-next-line
  }, [PeticionBuscarPersona.datos])

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <h3>Información de persona</h3>
      <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
        <Input.Search
          placeholder="Escribe un dni para buscar una persona"
          enterButton
          onSearch={Buscar}
        ></Input.Search>
        <Button type="primary"
          onClick={() => {
            push("/control-de-personal/base-personas/nueva-persona");
          }}
        >
          Registrar una persona
        </Button>
      </div>
      {Persona ? (
        <div style={{display:"flex"}}>
          <img src={Persona.Foto} width="120px" height="auto" alt="foto" style={{objectFit:"contain",backgroundColor:"whitesmoke",maxHeight:"111px"}}/>
          <Descriptions bordered column={6} style={{width:"100%"}} layout="vertical">
            <Descriptions.Item label="Nombre" span={2}>
              {Persona.nombre}
            </Descriptions.Item>
            <Descriptions.Item label="Genero">
              {Persona.Genero}
            </Descriptions.Item>
            <Descriptions.Item label="DNI">
              {Persona.numero_documento}
            </Descriptions.Item>
            <Descriptions.Item label="Ciudad">
              {Persona.nombre_distrito}
            </Descriptions.Item>
            <Descriptions.Item label="Nacionalidad">
              {Persona.Nacionalidad}
            </Descriptions.Item>
          </Descriptions>
        </div>
      ) : (
        <Empty description="No se ha encontrado ninguna persona" />
      )}
    </div>
  );
};
export default BuscadorPersonas;
