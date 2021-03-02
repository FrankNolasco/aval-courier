import React, { useEffect } from 'react'
import { IAXContacto } from '../../../@types/AXIntefaces'
import useAxios from '../../../App/hooks/useAxios'
import DividerRowWrapper from '../global/DividerRowWrapper'
import Contacto from '../molecula/Contacto'

interface Props {
    numero_documento : string
}

const ListaContactos = ({numero_documento}: Props) => {
    const ListaContactos = useAxios('POST','/api/personas/contacto/listar',true)
    useEffect(() => {
        const params = {numero_documento : numero_documento}
        ListaContactos.actualizarParametros(params)
        ListaContactos.iniciarPeticion()
        return () => {}
      }, [])
    return (
        <DividerRowWrapper>
            {
                ListaContactos.datos.map((data : IAXContacto , key : number) => <Contacto {...{data,key}}/>)
            }
        </DividerRowWrapper>
    )
}

export default ListaContactos
