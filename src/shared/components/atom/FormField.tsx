import React from 'react'
import { procesarLabel } from '../global/Formulario'
interface Props {
    children : any,
    required? : boolean,
    fieldName? : string,
    isCheker? : boolean,
    style? : any,
    direction? : "row" | "column"
}

const procesarCSS = (direction : "row" | "column" , style : any) => {
    return direction === "row" ? style ? style.width === "100%" ? {width:"14.5%"} : {} : {} : { alignSelf : "start" }
}


const FormField = ({children,required = false, fieldName , isCheker = false, style = {},direction = "row"}: Props) => (
    <div className={ direction === "row" ? "form-input-group" : "w-field-column"} style={{...style , margin : "10px 0" , flexDirection : direction}}>
        <label style={procesarCSS(direction,style)}>
            <span className="required" style={{ display: required ? "inline" : "none" }}>*</span>{fieldName && procesarLabel(fieldName, isCheker)}
        </label>
        {children}
    </div>
)

export default FormField
