import React,{Fragment} from 'react'
import { Route , Redirect } from 'react-router-dom'
import RegistroIncidencias from '../../pages/control-de-incidencias/RegistroIncidencias'
import RegistroContribuidores from '../../pages/control-de-personal/RegistroContribuidores'
import RegistroMensajeros from '../../pages/control-de-personal/RegistroMensajeros'
import NuevoOrdenServicio from '../../pages/control-de-servicio/ordenes-de-servicio/Nuevo'
import OrdenesServicio from '../../pages/control-de-servicio/OrdenesServicio'
import RegistroUsuarios from '../../pages/control-de-usuarios/RegistroUsuarios'
import Index from '../../pages/Index'
import Login from '../../pages/Login'
import Profile from '../../pages/Profile'
import { useUsuario } from '../hooks/global/UsuarioContext'

const Routes = () => {
    const {usuario} = useUsuario()
    return (<Fragment>
        <Route path = "/" exact>
            <Index/>
        </Route>
        <Route path = "/Login" exact>
            {usuario ?<Redirect to = "/Perfil"/> :  <Login/> }
        </Route>
        <Route path = "/Perfil" exact>
            {usuario ?  <Profile/> :<Redirect to = "/Login"/>}
        </Route>
        <Route path = "/control-de-servicio/ordenes-de-servicio" exact>
            <OrdenesServicio/>
        </Route>
        <Route path = "/control-de-servicio/ordenes-de-servicio/nuevo" exact>
            <NuevoOrdenServicio/>
        </Route>
        <Route path = "/control-de-personal/registro-de-contribuidores" exact>
            <RegistroContribuidores/>
        </Route>
        <Route path = "/control-de-personal/registro-de-mensajeros" exact>
            <RegistroMensajeros/>
        </Route>
        <Route path = "/control-de-incidencias/registro-de-incidencias" exact>
            <RegistroIncidencias/>
        </Route>
        <Route path = "/control-de-usuarios/registro-de-usuarios" exact>
            <RegistroUsuarios/>
        </Route>
        
    </Fragment>)
}

export default Routes

