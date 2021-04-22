import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { IHookAxios } from "../../@types/AXIntefaces";
import useAxios from "../../App/hooks/useAxios";
import DataTable from "../../shared/components/global/DataTable";
import GenericAccionButtons from "../../shared/components/molecula/GenericAccionButtons";
import PlantillaData from "../../shared/components/plantilla/PlantillaData";
import { GENERIC_ACTIONS } from "../../static/data/Constantes";

interface Props {}

const RegistroTurnos = (props: Props) => {
  const { push } = useHistory();
  const ApiResponse: IHookAxios = useAxios("POST", "/api/turnos/listar", false);
  const DeleteTurno: IHookAxios = useAxios(
    "POST",
    "/api/turnos/eliminar",
    true
  );
  const handleEdit = (data: any) => {
    push("/control-de-personal/registro-de-turnos/editar", { data });
  };
  const handleDelete = (data: any) => {
    DeleteTurno.actualizarParametros({ id_turno: data.Id_Turno });
    DeleteTurno.iniciarPeticion();
  };
  useEffect(() => {
    DeleteTurno.respuestaServer === 200 && ApiResponse.iniciarPeticion();
    return () => {};
  }, [DeleteTurno.respuestaServer]);

  const renderActions = (record: any, value: any) => (
    <GenericAccionButtons
      actions={GENERIC_ACTIONS(
        () => handleEdit(value),
        () => handleDelete(value)
      )}
    />
  );
  return (
    <PlantillaData
      title="Registro de puestos de trabajo"
      LinkBtn="/control-de-personal/registro-de-turnos/nuevo"
    >
      <DataTable
        dataSource={ApiResponse.datos}
        columnSource={["Id_Turno", "nombre_turno", "acciones"]}
        renderList={[{ name: "acciones", render: renderActions }]}
      />
    </PlantillaData>
  );
};

export default RegistroTurnos;
