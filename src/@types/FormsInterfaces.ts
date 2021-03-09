export interface IFormPersona {
    nombre : string, 
    numero_documento : number, 
    RUC : number, 
    fecha_nacimiento : Date, 
    genero : string, 
    nacionalidad: string, 
    distrito_nacimiento : {
        ciudad : string,
        value : number
    }
}