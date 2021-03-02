import React, { useEffect } from "react";
import useAxios from "../../../App/hooks/useAxios";
import Formulario from "../../../shared/components/global/Formulario";

interface Props {}

const NuevaPersona = (props: Props) => {
  const ListaCiudades = useAxios("POST",'/api/ciudad/listar')
  return (
    <div>
      <Formulario
        title="Nueva persona"
        inputs={[
          { name: "nombre", required: true, type: "input" },
          {
            name: "numero_documento",
            type: "input",
            required: true,
            customProps: { htmlType: "number" },
          },
          { name: "RUC", type: "input", customProps: { htmlType: "number" } },
          { name: "fecha_nacimiento", type: "calendar", required: true },
          { name :"genero" , type:"dropdown-prime", optionsDropdown:["M","F"]},
          { name : "nacionalidad" , type:"input",required:true},
          { name : "Id_Distrito_Nacimiento", type:"cascader" , optionsDropdown : ListaCiudades.datos, customProps : {
            optionGroupChildren:['provincias','distritos'],
            optionLabel : "ciudad" , optionGroupLabel : "label",
          } }
        ]}
        submitAction={(data: any) => console.log(data)}
      />
    </div>
  );
};

export default NuevaPersona;
