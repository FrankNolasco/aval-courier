import React from "react";
import useAxios from "../../App/hooks/useAxios";
import DataTable from "../../shared/components/global/DataTable";
import PlantillaData from "../../shared/components/plantilla/PlantillaData";

function RegistroIncidencias() {
  const ApiResponse = useAxios("POST", "/api/incidencias/listar", false);
  return (
    <PlantillaData title="Registro de incidencias" LinkBtn="/control-de-incidencias/registro-de-incidencias/nuevo">
        <DataTable
          dataSource={ApiResponse.datos}
          columnSource={["tipo_incidencia", "fecha_incidencia", "prioridad", "problema_asociado","actividad_resolucion","fecha_resolucion"]}
        />
    </PlantillaData>
  );
}

export default RegistroIncidencias;
