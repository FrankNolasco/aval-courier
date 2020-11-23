import React from "react";
import { Button, Card } from "antd";
import useAxios from "../../App/hooks/useAxios";
import DataTable from "../../shared/components/global/DataTable";
import { useHistory } from "react-router-dom";

function RegistroIncidencias() {
  const ApiResponse = useAxios("POST", "/api/incidencias/listar", false);
  const { push } = useHistory();
  return (
    <div className="container">
      <Card
        title="Registro de incidencias"
        extra={
          <Button onClick={() => push("/control-de-incidencias/nuevo")}>
            Nuevo
          </Button>
        }
      >
        <DataTable
          dataSource={ApiResponse.datos}
          columnSource={["tipo_incidencia", "fecha_incidencia", "prioridad", "problema_asociado","actividad_resolucion","fecha_resolucion"]}
        />
      </Card>
    </div>
  );
}

export default RegistroIncidencias;
