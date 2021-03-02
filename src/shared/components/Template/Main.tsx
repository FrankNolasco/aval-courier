import React from "react";
import { useTemplate } from "../../../App/hooks/global/TemplateContext";
import Routes from "../../../App/routes/app.routes";

function Main() {
  const { activeLateralBar, setActiveLateralBar } = useTemplate();
  return (
    <div
      className="Main-component"
      onClick={() => {
        activeLateralBar && setActiveLateralBar(false);
      }}
      style={{
        // opacity: activeLateralBar ? 0.8 : 1,
        // filter: `blur(${activeLateralBar ? "6px" : 0})`,
        // transitionProperty:"opacity filter",
        // transitionDuration:"1s"
      }}
    >
      <Routes />
    </div>
  );
}

export default Main;
