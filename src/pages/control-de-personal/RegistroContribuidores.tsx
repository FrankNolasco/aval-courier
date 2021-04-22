import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import useAxios from "../../App/hooks/useAxios";
import DataTable from "../../shared/components/global/DataTable";
import ConfirmarEliminacion from "../../shared/components/molecula/ConfirmarEliminacion";
import GenericAccionButtons from "../../shared/components/molecula/GenericAccionButtons";
import PlantillaData from "../../shared/components/plantilla/PlantillaData";
import { GENERIC_ACTIONS } from "../../static/data/Constantes";

function RegistroContribuidores() {
  const { push } = useHistory();
  const [flashRAM, setFlashRAM] = useState(undefined)
  const ApiResponse = useAxios("POST", "/api/trabajadores/listar", false);
  const ApiResponseDelete = useAxios(
    "POST",
    "/api/trabajadores/eliminar",
    true
  );

  const handleEdit = (data: any) => {
    push("/control-de-personal/registro-de-contribuidores/editar", { data });
  };
  const handleDelete = (data: any) => {
    ApiResponseDelete.actualizarParametros({
      numero_documento: data.numero_documento,
    });
    ApiResponseDelete.iniciarPeticion();
  };
  useEffect(() => {
    ApiResponseDelete.respuestaServer === 200 && ApiResponse.iniciarPeticion();
    return () => {};
  }, [ApiResponseDelete.respuestaServer]);
  return (
    <PlantillaData
      title="Registro de trabajadores"
      LinkBtn="/control-de-personal/registro-de-contribuidores/nuevo"
    >
      <DataTable
        dataSource={ApiResponse.datos}
        columnSource={[
          "numero_documento",
          "nombre",
          "turno",
          "nombre_puesto",
          "acciones",
        ]}
        renderList={[
          {
            name: "acciones",
            render: (i: any, r: any) => (
              <GenericAccionButtons
                actions={GENERIC_ACTIONS(
                  () => handleEdit(r),
                  () => setFlashRAM(r)
                )}
              />
            ),
          },
        ]}
      />
      <ConfirmarEliminacion
        label="Si el trabajador tiene un usuario asociado tambien será eliminado."
        visible={!!flashRAM}
        onHide={() => {setFlashRAM(undefined)}}
        onConfirm={() => {handleDelete(flashRAM)}}
        onCancel={() => {setFlashRAM(undefined)}}
      />
    </PlantillaData>
  );
}

export default RegistroContribuidores;
