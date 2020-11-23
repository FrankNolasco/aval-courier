import React, { useEffect, useMemo, createContext, useState } from "react";
import useAxios from "../useAxios";

interface IUsuario {
  id_usuario: number;
  nombre_usuario: string;
  id_colaborador: number;
}


interface IUsuarioProps {
  usuario: IUsuario;
  token: string;
  handleLogin: Function;
}
const UsuarioContext = createContext({} as IUsuarioProps);
export function UsuarioProvider(props: any) {
  const [usuario, setUsuario] = useState<IUsuario | undefined>();
  const [token, setToken] = useState<string>("");
  const Peticion = useAxios("POST", "/api/log-in", true);

  useEffect(() => {
    Peticion.datos.length > 0 && setUsuario(Peticion.datos[0]);
    return () => {};
  }, [Peticion.datos]);

  const handleLogin = (data: any) => {
    Peticion.actualizarParametros({
      username: data.username,
    });
    Peticion.iniciarPeticion();
  };

  useEffect(() => {
    return () => {};
    //eslint-disable-next-line
  }, []);
  const value = useMemo(() => {
    return { usuario, setUsuario, token, setToken, handleLogin };
    //eslint-disable-next-line
  }, [usuario, token]);
  return <UsuarioContext.Provider value={value} {...props} />;
}
export function useUsuario() {
  const context = React.useContext(UsuarioContext);
  if (!context) {
    throw new Error("No se encontro template en el contexto");
  }
  return context;
}
