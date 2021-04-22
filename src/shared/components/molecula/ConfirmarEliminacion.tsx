import { Button, Row } from "antd";
import { Dialog } from "primereact/dialog";
import React from "react";

interface Props {
  visible: boolean;
  onHide: Function;
  onConfirm: Function;
  onCancel: Function;
  label?: string;
}

const ConfirmarEliminacion = ({
  visible,
  onHide,
  onConfirm,
  onCancel,
  label
}: Props) => {
  return (
    <Dialog
      header="Eliminar es una accion irreversible"
      visible={visible}
      onHide={() => onHide()}
    >
      <div style={{display:"flex",flexDirection:"column", gap:5, textAlign:"center"}}>
        <span>{label}</span>
        <span>¿Estas seguro que deseas ejecutar esta acción?</span>
      </div>
      <Row justify="center" style={{ gap: 15, margin: "15px 0 0 0" }}>
        <Button type="primary" danger onClick={() => onConfirm()}>
          Eliminar
        </Button>
        <Button type="text" onClick={() => onCancel()}>
          Cancelar
        </Button>
      </Row>
    </Dialog>
  );
};

export default ConfirmarEliminacion;
