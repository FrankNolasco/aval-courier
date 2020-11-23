import React from "react";
import { Button, Card } from "antd";
import useAxios from "../../App/hooks/useAxios";
import DataTable from "../../shared/components/global/DataTable";
import { useHistory } from "react-router-dom";
function RegistroMensajeros() {
  const ApiResponse = useAxios("POST", "/api/mensajeros/listar", false);
  const { push } = useHistory();
  return (
    <div className="container">
      <Card
        title="Registro de mensajeros"
        extra={
          <Button
            onClick={() =>
              push("/control-de-personal/registro-de-mensajeros/nuevo")
            }
          >
            Nuevo
          </Button>
        }
      >
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
      </Card>
    </div>
  );
}

export default RegistroMensajeros;
