import { MenuProps } from "../../@types/Intefaces";

export const MenuLateralMap : MenuProps[] = [
    {
        key : "sub1",
        title : "Control de servicio",
        icono : "boxes",
        submenus : [
            {
                key : "100",
                link : "/control-de-servicio/ordenes-de-servicio",
                title : "Ordenes de servicio",
            }

        ]
    },
    {
        key : "sub2",
        title : "Control de personal",
        icono : "people-carry",
        submenus : [
            {
                key : "200",
                link : "/control-de-personal/registro-de-contribuidores",
                title : "Registro de personal",
            },
            {
                key : "201",
                link : "/control-de-personal/puestos-de-trabajo",
                title : "Registro de puestos de trabajo",
            },
            {
                key : "202",
                link : "/control-de-personal/registro-de-turnos",
                title : "Registro de turnos",
            },
            {
                key : "202",
                link : "/control-de-personal/base-personas",
                title : "Base de datos de personas",
            }
        ]
    },
    {
        key : "sub3",
        title : "Control de incidencias",
        icono : "exclamation-triangle",
        submenus : [
            {
                key : "300",
                link : "/control-de-incidencias/registro-de-incidencias",
                title : "Registro de incidencias",
            }

        ]
    },
    {
        key : "sub4",
        title : "Control de usuarios",
        icono : "user",
        submenus : [
            {
                key : "400",
                link : "/control-de-usuarios/registro-de-usuarios",
                title : "Registro de usuarios",
            },
            {
                key : "401",
                link : "/control-de-usuarios/registro-de-roles",
                title : "Registro de roles",
            }

        ]
    }
]

export const UnloggedMenu : MenuProps[] = [
    {
        title : "Iniciar sesión",
        key:"sub1000",
        icono : "log-in",
        submenus : [
            {
                key : "10001",
                link : "/Login",
                title : "Sesion de trabajadores"
            }
        ]
    }
]