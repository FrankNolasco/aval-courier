import moment from "moment";
import { IReducerNotifyStore } from "../../@types/Intefaces";
export const SUCCESS_MESSAGE: IReducerNotifyStore = {
  severity: "success",
  summary: "REGISTRO EXITOSO",
  detail: "SE REALIZÓ UN REGISTRO EXITOSO",
};
export const ERROR_MESSAGE: IReducerNotifyStore = {
  severity: "error",
  summary: "REGISTRO SIN EXITO",
  detail: "OCURRIÓ UN ERROR ",
};

const isUrl = (s: string) => {
  //eslint-disable-next-line
  const regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  return regexp.test(s);
};
export const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const calcularEdad = (fechaNacimiento: string) => {
  const edad = moment().diff(fechaNacimiento, "years");
  return edad > 1 ? `${edad} años` : `${edad} años`;
};

export const ToastAxiosResponse = (
  respuestaServer: number,
  Toast: { iniciar: Function; actualizarToast: Function }
) => {
  if (respuestaServer === 200) {
    Toast.actualizarToast(SUCCESS_MESSAGE);
    Toast.iniciar();
  }
  if (respuestaServer === 400) {
    Toast.actualizarToast(ERROR_MESSAGE);
    Toast.iniciar();
  }
};

const Util = { isUrl };

export default Util;
