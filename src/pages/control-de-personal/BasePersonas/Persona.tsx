import { Card } from "antd";
import React from "react";
import { useLocation } from "react-router-dom";
import { IAXPersona } from "../../../@types/AXIntefaces";
import InformacionPersonal from "../../../shared/components/molecula/InformacionPersonal";
import ListaContactos from "../../../shared/components/organismo/ListaContactos";
import ListaDirecciones from "../../../shared/components/organismo/ListaDirecciones";
import { calcularEdad } from "../../../static/functions/Util";

interface Props {}

const Persona = (props: Props) => {
  const { state }: { state: IAXPersona } = useLocation();

  return (
    <div className="page-persona">
      <Card
        hoverable
        title={
          <h2 className="page-persona__nombre-edad">
            {state.nombre} ({calcularEdad(state.fecha_nacimiento)})
          </h2>
        }
      >
        <InformacionPersonal data={state} />
      </Card>
      <Card
        hoverable
        title={
          <h3 className="page-personas__direcciones-title">
            <i className="fa fa-map-marked"></i> Direcciones
          </h3>
        }
      >
        <ListaDirecciones numero_documento={state.numero_documento} />
      </Card>
      <Card
        hoverable
        title={
          <h3 className="page-personas__direcciones-title">
            <i className="fa fa-address-book"></i> Informacion de contacto
          </h3>
        }
      >
        <ListaContactos numero_documento={state.numero_documento} />
      </Card>
    </div>
  );
};

export default Persona;
