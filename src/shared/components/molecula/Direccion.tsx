import React from 'react'
import { IAXDireccion } from '../../../@types/AXIntefaces'

interface Props {
    data : IAXDireccion
}
const procesarString = (pref : string , str : string,sep : string = " ") => {
    return str ? `${pref}${sep}${str.replace(" ",sep)}${sep}` : ""
}

export const procesarDireccion = (data:IAXDireccion,separador = " ") => {
    const Ur = procesarString("Urb.",data.urbanizacion!,separador)
    const av = procesarString("AV",data.AV,separador)
    const AAHH = procesarString("AAHH",data.AAHH,separador)
    const calle = procesarString("Calle",data.calle!,separador)
    const jiron = procesarString("Jr.",data.Jiron,separador)
    const nro = procesarString("#",data.nro_casa ? data.nro_casa.toString() : "",separador)
    const Lote = procesarString("Lote",data.Lote ? data.Lote.toString() : "",separador)
    const Mz = procesarString("Mz.",data.Mz ? data.Mz.toString() : "",separador)
    const nombre_distrito = procesarString("-",data.nombre_distrito ? data.nombre_distrito : "",separador)
    return `${Ur}${av}${jiron}${calle}${nro}${Mz}${Lote}${AAHH}${nombre_distrito}`
}

const Direccion = ({data}: Props) => {
    return (
        <div className="molecula-direccion">
            <div>
                <i className="fa fa-map-marker-alt"></i> 
                <span>{procesarDireccion(data)}</span>
            </div>
            <div>
                <i className="fa fa-map"></i>
                <span>{data.nombre_distrito}</span>
            </div>
            <a href={`https://www.google.com/maps/search/?api=1&query=${procesarDireccion(data,"+")}`}>
                Ver en google maps
            </a>
        </div>
    )
}

export default Direccion
