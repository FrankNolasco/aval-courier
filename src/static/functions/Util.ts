import moment from 'moment'
const isUrl = (s:string) => {   
    //eslint-disable-next-line
    const regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    return regexp.test(s);
}
export const random = (min:number, max:number) => {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

export const calcularEdad = (fechaNacimiento : string) => {
    const edad = moment().diff(fechaNacimiento,'years')
    return edad > 1 ? `${edad} años` : `${edad} años`
}

const Util = { isUrl }

export default Util