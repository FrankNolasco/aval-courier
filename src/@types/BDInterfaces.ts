export interface IBDPersona {
    nombre : string,
    numero_documento : string,
    fecha_nacimiento : string,
    Foto? : string,
    Genero : "M" | "F",
    Nacionalidad : string,
    Id_Distrito_Nacimiento : number,
    RUC? : string
}