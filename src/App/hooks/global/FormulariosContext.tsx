import React, { useEffect, useMemo, createContext, useState } from "react";
import useAxios from "../useAxios";

interface IInputForm {
  name: string;
  type: "input" | "dropdown" | "calendar"  | "search" | "cascader";
  optionsDropdown?: any[];
  optionLabel?: string;
  optionValue?: string;
  searchEndPoint?: string;
  customProps?: object;
}

interface IOrdenForms {
  Remitente: IInputForm[];
  Destinatario: IInputForm[];
  OrdenServicio: IInputForm[];
}

export interface IFormulariosExports {
  OrdenForms: IOrdenForms;
}

interface Formulario {
    FormularioStore : any
}

const FormularioContext = createContext({} as Formulario);
export function FormularioProvider(props: any) {
    const Ciudades = useAxios('POST','/api/ciudad/listar')
  const [FormularioStore, setFormularioStore] = useState<IFormulariosExports>();

  useEffect(() => {
    //   if(Ciudades.datos.length > 0){
          setFormularioStore({
            OrdenForms: {
                Remitente: [
                  {
                    name: "tipo_documento",
                    type: "dropdown",
                    optionsDropdown: [
                      { id: 1, option: "DNI" },
                      { id: 2, option: "RUC" },
                    ],
                    optionLabel: "option",
                    optionValue: "id",
                  },
                  {
                    name: "numero_documento",
                    type: "input",
                    customProps: { type: "number", required: true },
                  },
                  { name: "nombre", type: "input", customProps: { required: true } },
                  {
                    name: "urbanizacion",
                    type: "input",
                    customProps: { required: true },
                  },
                  { name: "calle", type: "input", customProps: { required: true } },
                  {
                    name: "numero_casa",
                    type: "input",
                    customProps: { type: "number", required: true },
                  },
                  { name: "telefono", type: "input" },
                  {
                    name: "correo_electronico",
                    type: "input",
                    customProps: { type: "email" },
                  },
                  {
                    name: "id_ciudad",
                    type: "cascader",
                    optionsDropdown : Ciudades.datos
                  },
                ],
                Destinatario: [
                  { name: "tipo_documento", type: "input" },
                  { name: "numero_documento", type: "input" },
                  { name: "nombre", type: "input" },
                  { name: "urbanizacion", type: "input" },
                  { name: "calle", type: "input" },
                  { name: "numero_casa", type: "input" },
                  { name: "telefono", type: "input" },
                  { name: "correo_electronico", type: "input" },
                  {
                    name: "id_ciudad",
                    type: "cascader",
                    optionsDropdown : Ciudades.datos
                  },
                ],
                OrdenServicio: [{ name: "fecha_envio", type: "calendar" }],
              }
          })
    //   }
    return () => {};
  }, [Ciudades.datos]);
//   }, [Ciudades.datos]);

  useEffect(() => {
    return () => {};
    //eslint-disable-next-line
  }, []);
  const value = useMemo(() => {
    return { FormularioStore };
    //eslint-disable-next-line
  }, [FormularioStore]);
  return <FormularioContext.Provider value={value} {...props} />;
}
export function useFormularios() {
  const context = React.useContext(FormularioContext);
  if (!context) {
    throw new Error("No se encontro template en el contexto");
  }
  return context;
}
