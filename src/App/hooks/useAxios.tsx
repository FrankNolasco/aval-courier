import { useEffect } from "react";
import { useState } from "react";
import Axios, { AxiosInstance } from "axios";
import AxiosTokenProvider from "axios-token-interceptor";
import { useUsuario } from "./global/UsuarioContext";

function useAxios(METHOD : "POST" | "GET", url : string , noEjectuarAlInicio : boolean = false ,parametros? : any) {
  const { usuario , token} = useUsuario();
  const [respuestaServer, setRespuestaServer] = useState<number>(0)
  const [datos, setDatos] = useState<any[]>([]);
  const [error, setError] = useState(null);
  const [cargando, setCargando] = useState(false);
  const resetearConsulta = () =>{
    setRespuestaServer(0)
    setDatos([])
    setError(null)
    setCargando(false)
  }
  const actualizarParametros = (nuevosParametros : any) => {
    parametros = nuevosParametros;
  }
  const actualizarUrl = (nuevaUrl : string) =>{
    url = nuevaUrl
  }
  const crearInstanciaAxios = () => {
    const instance : AxiosInstance = Axios.create({
      baseURL: "http://localhost:5000",
    });
    instance.interceptors.request.use(
      AxiosTokenProvider({
        getToken: () => token,
      })
    );
    return instance
  }
  const enviarPeticion = async (instance : AxiosInstance) => {
    let respuesta = null
    switch (METHOD) {
      case 'POST':
        respuesta = await instance.post(url, parametros);
        break;
      case 'GET':
        respuesta = await instance.get(url);
        break;
      default:
        break;
    }
    return respuesta
  }
  const iniciarPeticion = async () => {
    resetearConsulta();
    setCargando(true);
    try {
      const instanciaAxios = crearInstanciaAxios()
      const respuesta = await enviarPeticion(instanciaAxios)
      setRespuestaServer(200)
      respuesta && setDatos(respuesta.data);
      setCargando(false);
    } catch (error) {
      setRespuestaServer(400)
      setDatos([]);
      setCargando(false);
      setError(error);
    }
  }
  useEffect(() => {
    if(usuario && !noEjectuarAlInicio){
      iniciarPeticion()
    }
    return () => {
      new Axios.Cancel()
    };
    //eslint-disable-next-line
  }, [usuario, noEjectuarAlInicio ]);
  return { datos, cargando, error,setDatos, actualizarParametros , iniciarPeticion , actualizarUrl , resetearConsulta,respuestaServer}
}

export default useAxios;