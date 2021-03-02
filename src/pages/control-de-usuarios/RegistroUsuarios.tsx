import React from "react";
import useAxios from "../../App/hooks/useAxios";
import DataTable from "../../shared/components/global/DataTable";
import PlantillaData from "../../shared/components/plantilla/PlantillaData";

function RegistroUsuarios() {
  const ApiResponse = useAxios("POST", "/api/usuarios/listar", false);
  return (
    <PlantillaData title="Registro de usuarios" LinkBtn="/control-de-usuarios/registro-de-usuarios/nuevo">
      <DataTable
        dataSource={ApiResponse.datos}
        columnSource={[
          "nombre_usuario",
          "nombre",
          "nombre_Rol",
          "estado",
        ]}
      />
    </PlantillaData>
  );
}

export default RegistroUsuarios;
