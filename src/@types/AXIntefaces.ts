export interface IHookAxios {
    datos: any[];
    cargando: boolean;
    error: any;
    setDatos: Function;
    actualizarParametros: Function;
    iniciarPeticion: Function;
    actualizarUrl: Function;
    resetearConsulta: Function;
    respuestaServer: null | number;
}
export interface IAXPersona {
    Foto? : string,
    Genero : "M" | "F",
    Id_Distrito_Nacimiento : number,
    Nacionalidad : string,
    fecha_nacimiento : string,
    nombre : string,
    nombre_distrito : string,
    numero_documento : string,
    RUC? : string
}

export interface IHABuscadorPersona extends IHookAxios {
    datos : IAXPersona[]
}
export interface IAXDireccion {
    Id_Direccion : number,
    Id_Persona_Direccion : number,
    numero_documento : string,
    calle? : string,
    nro_casa? : number,
    urbanizacion? : string,
    nombre_distrito : string,
    AAHH : string,
    Lote : number,
    Mz : string,
    Jiron : string,
    AV : string
}
export interface IAXContacto {
    numero_documento : string,
    Tipo_Contacto : number,
    Nombre : string,
    Detalle_Contacto : string
}