import React from "react";
import Button, { ButtonProps } from "antd/lib/button/button";


export interface IActionButton extends ButtonProps {}

interface Props {
  actions: IActionButton[];
}

const GenericAccionButtons = ({ actions }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: 20,
      }}
    >
      {actions.map((el) => (
        <Button {...el}>{el.children}</Button>
      ))}
    </div>
  );
};

export default GenericAccionButtons;
