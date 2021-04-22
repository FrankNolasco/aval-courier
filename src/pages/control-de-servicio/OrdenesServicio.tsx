import React from "react";
import useAxios from "../../App/hooks/useAxios";
import DataTable from "../../shared/components/global/DataTable";
import GenericAccionButtons from "../../shared/components/molecula/GenericAccionButtons";
import PlantillaData from "../../shared/components/plantilla/PlantillaData";
import { GENERIC_ACTIONS } from "../../static/data/Constantes";
function OrdenesServicio() {
  const ApiResponse = useAxios("POST", "/api/ordenes-de-servicio/listar");
  const handleEdit = () => {}
  const handleDelete = () => {}
  return (
    <PlantillaData
      title="Registro de ordenes de servicio"
      LinkBtn="/control-de-servicio/ordenes-de-servicio/nuevo"
    >
      <DataTable
        dataSource={ApiResponse.datos}
        columnSource={[
          "id_orden",
          "remitente",
          "destinatario",
          "urbanizacion",
          "calle",
          "numero_casa",
          "fecha_envio",
          "estado_orden",
          "acciones"
        ]}
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

export default OrdenesServicio;
