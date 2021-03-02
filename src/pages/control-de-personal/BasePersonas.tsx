import React from "react";
import { Link } from "react-router-dom";
import useAxios from "../../App/hooks/useAxios";
import DataTable from "../../shared/components/global/DataTable";
import PlantillaData from "../../shared/components/plantilla/PlantillaData";
import { calcularEdad } from "../../static/functions/Util";
interface Props {}
const BasePersonas = (props: Props) => {
  const ListaPersonas = useAxios("POST", "/api/personas/listar");
  return (
    <PlantillaData
      title="Base de datos de personas registradas en el sistema"
      LinkBtn="/control-de-personal/base-personas/nueva-persona"
    >
      <DataTable
        dataSource={ListaPersonas.datos}
        columnSource={["numero_documento", "nombre", "Genero","edad","nombre_distrito", "acciones"]}
        renderList={[
          {
            name: "acciones",
            render: (record : any , value : any) => (
              <Link to={{pathname :"/control-de-personal/base-personas/persona",state : { ...value }}}>
                MAS INFORMACION
              </Link>
            ),
          },
          {
              name:"edad",
              render: (record : any , value : any) => <span>
                    {calcularEdad(value.fecha_nacimiento)}
                </span>
          }
        ]}
      />
    </PlantillaData>
  );
};

export default BasePersonas;
