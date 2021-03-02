import React from "react";
import useAxios from "../../App/hooks/useAxios";
import DataTable from "../../shared/components/global/DataTable";
import PlantillaData from "../../shared/components/plantilla/PlantillaData";

function RegistroContribuidores() {
  const ApiResponse = useAxios("POST", "/api/colaboradores/listar", false);
  return (
    <PlantillaData title="Registro de contribuidores" LinkBtn="/control-de-personal/registro-de-contribuidores/nuevo">
      <DataTable
          dataSource={ApiResponse.datos}
          columnSource={[
            "numero_documento",
            "nombre",
            "turno",
            "nombre_puesto",
          ]}
        />
    </PlantillaData> 
  );
}

export default RegistroContribuidores;
