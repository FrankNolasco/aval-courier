export interface MenuProps {
    key : string,
    title : string,
    icono : string,
    submenus : {
        key : string,
        link : string,
        title : string
    }[]
}
export interface IReducerNotifyStore {
    severity: "info" | "success" | "error" | "warn";
    summary: JSX.Element | string;
    detail: JSX.Element | string;
  }