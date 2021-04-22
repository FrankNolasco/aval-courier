import React from "react";
import useAxios from "../../App/hooks/useAxios";
import DataTable from "../../shared/components/global/DataTable";
import GenericAccionButtons from "../../shared/components/molecula/GenericAccionButtons";
import PlantillaData from "../../shared/components/plantilla/PlantillaData";
import { GENERIC_ACTIONS } from "../../static/data/Constantes";

function RegistroIncidencias() {
  const ApiResponse = useAxios("POST", "/api/incidencias/listar", false);
  const handleEdit = () => {}
  const handleDelete = () => {}
  return (
    <PlantillaData title="Registro de incidencias" LinkBtn="/control-de-incidencias/registro-de-incidencias/nuevo">
        <DataTable
          dataSource={ApiResponse.datos}
          columnSource={["tipo_incidencia", "fecha_incidencia", "prioridad", "problema_asociado","actividad_resolucion","fecha_resolucion","acciones"]}
          renderList={[
            {
              name: "acciones",
              render: () => <GenericAccionButtons actions={GENERIC_ACTIONS(handleEdit,handleDelete)} />,
            },
          ]}
        />
    </PlantillaData>
  );
}

export default RegistroIncidencias;
