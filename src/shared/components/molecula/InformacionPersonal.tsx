import React from "react";
import { IAXPersona } from "../../../@types/AXIntefaces";
import Avatar from "../atom/Avatar";
import IconFA from "../atom/IconFA";

interface Props {
  data: IAXPersona;
}
interface ItemProps {
  label: string;
  icon: string;
  value: string | number;
}
const Item = ({ label, icon, value }: ItemProps) => (
  <div>
    <IconFA iconName={icon} />
    <strong>{label}</strong>
    <span>{value}</span>
  </div>
);

const InformacionPersonal = ({ data }: Props) => {
  return (
    <div className="page-persona__datos-personales">
      <Avatar
        src={
          data.Foto
            ? data.Foto
            : "https://d1bvpoagx8hqbg.cloudfront.net/259/0f326ce8a41915e8b1d21ffaee087fae.jpg"
        }
        form="circle"
        scale={2.5}
      />
      <div className="page-persona__datos-personales-textos">
        <Item icon="id-card-alt" label="DNI" value={data.numero_documento} />
        {data.RUC && <Item icon="id-card" label="RUC" value={data.RUC} />}
        <Item icon="flag" label="NACIONALIDAD" value={data.Nacionalidad} />
        <Item icon="id-venus-mars" label="Sexo" value={data.Genero} />
        <Item
          icon="calendar"
          label="Fecha Nacimiento"
          value={data.fecha_nacimiento}
        />
        <Item
          icon="map-marker-alt"
          label="Lugar de nacimiento"
          value={data.nombre_distrito}
        />
      </div>
    </div>
  );
};

export default InformacionPersonal;
