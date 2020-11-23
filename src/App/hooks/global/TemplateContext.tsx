import React, { useEffect, useMemo, createContext , useState } from "react";

interface ITemplateProps {
  activeLateralBar : boolean,
  setActiveLateralBar : React.Dispatch<React.SetStateAction<boolean>>
}
const TemplateContext = createContext({ } as ITemplateProps);
export function TemplateProvider(props : any) {
  const [activeLateralBar, setActiveLateralBar] = useState<boolean>(false)
  useEffect(() => {
    return () => {};
  //eslint-disable-next-line
  }, []);
  const value = useMemo(() => {
    return { activeLateralBar , setActiveLateralBar  };
    //eslint-disable-next-line
  }, [activeLateralBar]);
  return <TemplateContext.Provider value={value} {...props} />;
}
export function useTemplate() {
  const context = React.useContext(TemplateContext);
  if (!context) {
    throw new Error("No se encontro template en el contexto");
  }
  return context;
}