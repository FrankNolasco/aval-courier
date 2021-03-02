import React from "react";

interface Props {
  scale: number;
  form: "square" | "circle";
  src: string;
}

const Avatar = ({ src, scale , form }: Props) => {
  return (
    <div
      className="atom-avatar"
      style={{ width: Math.abs(scale) * 64, height: Math.abs(scale) * 64}}
    >
      <img
        src={src}
        alt="FOTO PERSONA EN AVAL COURIER"
        style={{ width: Math.abs(scale) * 64, height: Math.abs(scale) * 64, borderRadius : form === "circle" ? "50%" : 0 }}
      />
    </div>
  );
};

export default Avatar;
