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