import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { IHookAxios } from "../../@types/AXIntefaces";
import useAxios from "../../App/hooks/useAxios";
import DataTable from "../../shared/components/global/DataTable";
import GenericAccionButtons from "../../shared/components/molecula/GenericAccionButtons";
import PlantillaData from "../../shared/components/plantilla/PlantillaData";
import { GENERIC_ACTIONS } from "../../static/data/Constantes";
import { Modal } from "antd";
interface Props {}
const RegistroPuestosTrabajo = (props: Props) => {
  const { push } = useHistory()
  const [confirmationModal, setConfirmationModal] = useState(false)
  const ApiResponse: IHookAxios = useAxios(
    "POST",
    "/api/puestos-de-trabajo/listar",
    false
  );
  const ApiResponseDelete: IHookAxios = useAxios(
    "POST",
    "/api/puestos-de-trabajo/eliminar",
    true
  );
  const handleEdit = (data: any) => {
    push("/control-de-personal/puestos-de-trabajo/editar",{ data })
  };
  const handleDelete = (data: any) => {
    setConfirmationModal(true)
    // ApiResponseDelete.actualizarParametros({id_puesto : data.id_puesto})
    // ApiResponseDelete.iniciarPeticion()
  };
  useEffect(() => {
    ApiResponseDelete.respuestaServer === 200 && ApiResponse.iniciarPeticion()
    return () => {}
  }, [ApiResponseDelete.respuestaServer])
  return (
    <PlantillaData
      title="Registro de puestos de trabajo"
      LinkBtn="/control-de-personal/puestos-de-trabajo/nuevo"
    >
      <DataTable
        dataSource={ApiResponse.datos}
        columnSource={["id_puesto", "nombre_puesto", "acciones"]}
        renderList={[
          {
            name: "acciones",
            render: (i: any, r: any) => (
              <GenericAccionButtons
                actions={GENERIC_ACTIONS(
                  () => handleEdit(r),
                  () => handleDelete(r)
                )}
              />
            ),
          },
        ]}
      />
      <Modal title="Confirmación" visible={confirmationModal} onOk={()=>{}} onCancel={()=>{setConfirmationModal(false)}}>
        <p style={{textAlign:"center"}}>¿Estas seguro que deseas realizar esta acción?</p>
      </Modal>
    </PlantillaData>
  );
};
export default RegistroPuestosTrabajo;