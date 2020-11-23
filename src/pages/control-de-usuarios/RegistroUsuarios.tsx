import React from "react";
import { Button, Card } from "antd";
import useAxios from "../../App/hooks/useAxios";
import DataTable from "../../shared/components/global/DataTable";
import { useHistory } from "react-router-dom";

function RegistroUsuarios() {
  const ApiResponse = useAxios("POST", "/api/usuarios/listar", false);
  const { push } = useHistory();
  return (
    <div className="container">
      <Card
        title="Registro de usuarios"
        extra={
          <Button
            onClick={() =>
              push("/control-de-usuarios/nuevo")
            }
          >
            Nuevo
          </Button>
        }
      >
        <DataTable
          dataSource={ApiResponse.datos}
          columnSource={[
            "nombre_usuario",
            "apellidos",
            "nombres",
            "estado",
          ]}
        />
      </Card>
    </div>
  );
}

export default RegistroUsuarios;
