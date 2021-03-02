import React, { useEffect } from "react";
import { IAXDireccion } from "../../../@types/AXIntefaces";
import useAxios from "../../../App/hooks/useAxios";
import DividerRowWrapper from "../global/DividerRowWrapper";
import Direccion from "../molecula/Direccion";

interface Props {
    numero_documento : string
}

const ListaDirecciones = ({numero_documento}: Props) => {
  const ListaDirecciones = useAxios(
    "POST",
    "/api/personas/direcciones/listar",
    true
  );
  useEffect(() => {
    const params = { numero_documento };
    ListaDirecciones.actualizarParametros(params);
    ListaDirecciones.iniciarPeticion();
    return () => {};
  }, []);
  return (
    <DividerRowWrapper>
      {ListaDirecciones.datos.map((data: IAXDireccion, key: number) => (
        <Direccion {...{ data, key }} />
      ))}
    </DividerRowWrapper>
  );
};

export default ListaDirecciones;
