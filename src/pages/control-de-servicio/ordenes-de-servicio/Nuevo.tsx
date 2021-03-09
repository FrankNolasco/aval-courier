import React, { useState } from "react";
import { Card, Steps } from "antd";
import Formulario from "../../../shared/components/global/Formulario";
import BuscadorPersonas from "../../../shared/components/molecula/BuscadorPersonas";
import ListaDirecciones from "../../../shared/components/molecula/ListaDirecciones";
const steps = [
  { title: "Remitente" },
  { title: "Destinatario" },
  { title: "Orden de servicio" },
  { title: "Resultado" },
];

interface contentProps {
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
}

const Content = ({ current, setCurrent }: contentProps): JSX.Element => {
  const [Destinatario, setDestinatario] = useState()
  const [Remitente, setRemitente] = useState<any>()
  switch (current) {
    case 0:
      return (
        <div className="content-step">
          <Formulario
            descripcions={<div>
                <BuscadorPersonas Persona={Remitente} setPersona={setRemitente}/>
                <ListaDirecciones numero_documento={Remitente ? Remitente.numero_documento : ""}/>
              </div>}
            inputs={[]}
            submitLabel="Siguiente"
            submitAction={() => {
              setCurrent(1);
            }}
          />
        </div>
      );
    case 1:
      return (
        <div className="content-step">
          <Formulario
            descripcions={<BuscadorPersonas Persona={Destinatario} setPersona={setDestinatario}/>}
            inputs={[]}
            submitLabel="Siguiente"
            submitAction={() => {
              setCurrent(2);
            }}
          />
        </div>
      );
    case 2:
      return (
        <div className="content-step">
          <Formulario
            inputs={[
              { name: "Detalle_del_paquete", type: "input" },
              {
                name: "Peso_del_paquete",
                type: "input",
                customProps: { type: "number" },
              },
              {
                name:"modalidad_pago",
                type:"dropdown-prime",
                optionsDropdown:["PAGO EFECTIVO"]
              },
              {
                name:"Mensajero",
                type:"dropdown-prime",
              }
            ]}
            submitLabel="Siguiente"
            submitAction={() => {
              setCurrent(2);
            }}
          />
        </div>
      );
    case 3:
      return <div className="content-step"></div>;
    default:
      return <></>;
  }
};

function NuevoOrdenServicio() {
  const { Step } = Steps;
  const [current, setCurrent] = React.useState(0);

  return (
    <div className="nueva-order-servicio-body">
      <Card>
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <Content current={current} setCurrent={setCurrent} />
      </Card>
    </div>
  );
}

export default NuevoOrdenServicio;
