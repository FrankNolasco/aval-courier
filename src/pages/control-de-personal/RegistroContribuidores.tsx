import React from "react";
import { Button, Card } from "antd";
import useAxios from "../../App/hooks/useAxios";
import DataTable from "../../shared/components/global/DataTable";
import { useHistory } from "react-router-dom";

function RegistroContribuidores() {
  const ApiResponse = useAxios("POST", "/api/colaboradores/listar", false);
  const { push } = useHistory();
  return (
    <div className="container">
      <Card
        title="Registro de contribuidores"
        extra={
          <Button
            onClick={() =>
              push("/control-de-personal/registro-de-contribuidores/nuevo")
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

export default RegistroContribuidores;
