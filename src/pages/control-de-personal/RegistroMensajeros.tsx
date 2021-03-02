import React from "react";
import useAxios from "../../App/hooks/useAxios";
import DataTable from "../../shared/components/global/DataTable";
import PlantillaData from "../../shared/components/plantilla/PlantillaData";
function RegistroMensajeros() {
  const ApiResponse = useAxios("POST", "/api/mensajeros/listar", false);
  return (
    <PlantillaData title="Registro de mensajeros" LinkBtn = "/control-de-personal/registro-de-mensajeros/nuevo">
      <DataTable
          dataSource={ApiResponse.datos}
          columnSource={[
            "dni",
            "apellidos",
            "nombres",
            "turno",
            "nombre_puesto",
          ]}
      />
    </PlantillaData>
  );
}

export default RegistroMensajeros;
