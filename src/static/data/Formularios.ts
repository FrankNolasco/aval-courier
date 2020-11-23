interface IInputForm {
    name : string,
    type : "input" | "dropdown" | "calendar",
    optionsDropdown? : any[],
    optionLabel? : string,
    optionValue ? : string,
    searchEndPoint? : string
    customProps? : object,
}

interface IOrdenForms {
    Remitente : IInputForm[],
    Destinatario : IInputForm[],
    OrdenServicio : IInputForm[]
}

export interface IFormulariosExports {
    OrdenForms : IOrdenForms
}

const Formularios : IFormulariosExports = {

    OrdenForms : {
        Remitente : [
            { name : "tipo_documento" , type : "dropdown" , optionsDropdown : [{ id : 1 , option : "DNI"},{ id : 2 , option : "RUC"}] , optionLabel : "option" , optionValue : "id" },
            { name : "numero_documento" , type : "input" , customProps : {type : "number" , required : true}} , 
            { name : "nombre"  , type : "input", customProps : { required : true}} , 
            { name : "urbanizacion"  , type : "input", customProps : { required : true}} ,
            { name : "calle"  , type : "input", customProps : { required : true}},
            { name : "numero_casa" , type : "input", customProps : {type : "number" , required : true}},
            { name : "telefono" , type : "input" },
            { name : "correo_electronico"  , type : "input", customProps : {type : "email" }},
            { name : "id_ciudad" , type : "dropdown" , optionsDropdown : [{ id : 1 , option : "DNI"},{ id : 2 , option : "RUC"}] , optionLabel : "option" , optionValue : "id" },
        ],
        Destinatario : [
            { name : "tipo_documento" , type : "input" } , 
            { name : "numero_documento"  , type : "input"} , 
            { name : "nombre"  , type : "input"} , 
            { name : "urbanizacion"  , type : "input"} ,
            { name : "calle" , type : "input"},
            { name : "numero_casa"  , type : "input"},
            { name : "telefono"  , type : "input"},
            { name : "correo_electronico"  , type : "input"},
            { name : "id_ciudad" , type : "input"}
        ],
        OrdenServicio : [
            { name : "fecha_envio" , type : "calendar"}
        ]
    }
}

export default Formularios