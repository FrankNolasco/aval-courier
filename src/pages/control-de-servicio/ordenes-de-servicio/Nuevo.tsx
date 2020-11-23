import React from "react";
import { Card, Steps } from "antd";
// import Formularios from "../../../static/data/Formularios";
import Formulario from "../../../shared/components/global/Formulario";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useFormularios } from "../../../App/hooks/global/FormulariosContext";
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

const BtnSgt = () => {
  return <div className="btn-siguiente"><span>Siguiente</span><FontAwesomeIcon icon = {faAngleRight} /></div>
}

const Content = ({ current, setCurrent }: contentProps): JSX.Element => {
  const { FormularioStore } = useFormularios()
  switch (current) {
    case 0:
      return (
        <div className="content-step">
          <Formulario
            title="Datos del remitente"
            inputs={FormularioStore ? FormularioStore.OrdenForms.Remitente : []}
            submitAction={(data: any) => {
              console.log(data);
              setCurrent(1);
            }}
            submitLabel={<BtnSgt/>}
          />
        </div>
      );
    case 1:
      return (
        <div className="content-step">
          <Formulario
            title="Datos del destinatario"
            inputs={FormularioStore ? FormularioStore.OrdenForms.Destinatario : []}
            submitAction={(data: any) => {
              console.log(data);
              setCurrent(2);
            }}
            submitLabel={<BtnSgt/>}
          />
        </div>
      );
    case 2:
      return <div className="content-step">
        <Formulario
          title="Orden de servicio"
          inputs={FormularioStore ? FormularioStore.OrdenForms.OrdenServicio : []}
          submitAction={(data: any) => {
            console.log(data);
            setCurrent(3);
          }}
          submitLabel="Siguiente"
        />
      </div>;
    case 3:
      return <div className="content-step">
        <Formulario
          title="Datos del remitente"
          inputs={FormularioStore ? FormularioStore.OrdenForms.OrdenServicio : []}
          submitAction={(data: any) => {
            console.log(data);
            setCurrent(3);
          }}
          submitLabel="Finalizar"
        />
      </div>;
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
