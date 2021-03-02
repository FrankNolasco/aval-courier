import { Descriptions, Input } from "antd";
import React, { Fragment, useState } from "react";
import useAxios from "../../../App/hooks/useAxios";
import Formulario from "../../../shared/components/global/Formulario";
import BuscadorPersonas from "../../../shared/components/molecula/BuscadorPersonas";
interface Props {}
const NuevoContribuidor = (props: Props) => {
  const [persona, setPersona] = useState()
  const ListaSucursales = useAxios('POST','/api/sucursales/listar')
  const ListaPT = useAxios('POST','/api/puestos-de-trabajo/listar')

  return (
    <Formulario
      title="Nuevo Trabajador"
      descripcions={
        <Fragment>
          <BuscadorPersonas/>
          <h3 style={{marginTop:20}}>Informacion del trabajo</h3>
        </Fragment>
      }
      inputs={[
        {
          name: "turno",
          type: "dropdown-prime",
          required:true,
          optionsDropdown: ["MAÑANA", "TARDE"],
        },
        {
            name:"id_puesto_trabajo",
            type:"dropdown-prime",
            required:true,
            optionsDropdown : Array.isArray(ListaPT.datos) ? ListaPT.datos : [],
            optionLabel:"nombre_puesto"
        },
        {
            name:"id_sucursal",
            type:"dropdown-prime",
            required:true,
            optionsDropdown : Array.isArray(ListaSucursales.datos) ? ListaSucursales.datos : [],
            optionLabel:"Nombre_Sucursal"
        }
      ]}
      submitAction={(data: any) => console.log(data)}
    />
  );
};

export default NuevoContribuidor;
