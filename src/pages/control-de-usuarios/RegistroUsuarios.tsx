import React from "react";
import useAxios from "../../App/hooks/useAxios";
import DataTable from "../../shared/components/global/DataTable";
import GenericAccionButtons from "../../shared/components/molecula/GenericAccionButtons";
import PlantillaData from "../../shared/components/plantilla/PlantillaData";
import { GENERIC_ACTIONS } from "../../static/data/Constantes";

function RegistroUsuarios() {
  const ApiResponse = useAxios("POST", "/api/usuarios/listar", false);
  const handleEdit = () => {}
  const handleDelete = () => {}
  return (
    <PlantillaData title="Registro de usuarios" LinkBtn="/control-de-usuarios/registro-de-usuarios/nuevo">
      <DataTable
        dataSource={ApiResponse.datos}
        columnSource={[
          "nombre_usuario",
          "nombre",
          "nombre_Rol",
          "estado",
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

export default RegistroUsuarios;
