import React,{Fragment} from 'react'
import { Route , Redirect } from 'react-router-dom'
import NuevaIncidencia from '../../pages/control-de-incidencias/control-de-incidencias/Nuevo'
import RegistroIncidencias from '../../pages/control-de-incidencias/RegistroIncidencias'
import BasePersonas from '../../pages/control-de-personal/BasePersonas'
import NuevaPersona from '../../pages/control-de-personal/BasePersonas/NuevaPersona'
import Persona from '../../pages/control-de-personal/BasePersonas/Persona'
import RegistroContribuidores from '../../pages/control-de-personal/RegistroContribuidores'
import NuevoContribuidor from '../../pages/control-de-personal/RegistroContribuidores/NuevoContribuidor'
import NuevoMensajero from '../../pages/control-de-personal/RegistroContribuidores/NuevoMensajero'
import RegistroMensajeros from '../../pages/control-de-personal/RegistroMensajeros'
import NuevoOrdenServicio from '../../pages/control-de-servicio/ordenes-de-servicio/Nuevo'
import OrdenesServicio from '../../pages/control-de-servicio/OrdenesServicio'
import NuevoPuestoTrabajo from '../../pages/control-de-usuarios/registro-de-puestos-trabajo/Nuevo'
import NuevoTurno from '../../pages/control-de-usuarios/registro-de-turnos/Nuevo'
import NuevoUsuario from '../../pages/control-de-usuarios/registro-de-usuarios/Nuevo'
import RegistroPuestosTrabajo from '../../pages/control-de-usuarios/RegistroPuestosTrabajo'
import RegistroTurnos from '../../pages/control-de-usuarios/RegistroTurnos'
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
        <Route path = "/control-de-personal/registro-de-contribuidores/nuevo" exact>
            <NuevoContribuidor/>
        </Route>
        <Route path = "/control-de-personal/registro-de-mensajeros" exact>
            <RegistroMensajeros/>
        </Route>
        <Route path = "/control-de-personal/registro-de-mensajeros/nuevo" exact>
            <NuevoMensajero/>
        </Route>
        <Route path="/control-de-personal/puestos-de-trabajo" exact>
            <RegistroPuestosTrabajo/>
        </Route>
        <Route path="/control-de-personal/puestos-de-trabajo/nuevo" exact>
            <NuevoPuestoTrabajo/>
        </Route>
        <Route path="/control-de-personal/registro-de-turnos" exact>
            <RegistroTurnos/>
        </Route>
        <Route path="/control-de-personal/registro-de-turnos/nuevo" exact>
            <NuevoTurno/>
        </Route>
        <Route path = "/control-de-personal/base-personas" exact>
            <BasePersonas/>
        </Route>
        <Route path = "/control-de-personal/base-personas/Persona" exact>
            <Persona/>
        </Route>
        <Route path = "/control-de-personal/base-personas/nueva-persona" exact>
            <NuevaPersona/>
        </Route>
        <Route path = "/control-de-incidencias/registro-de-incidencias" exact>
            <RegistroIncidencias/>
        </Route>
        <Route path = "/control-de-incidencias/registro-de-incidencias/nuevo" exact>
            <NuevaIncidencia/>
        </Route>
        <Route path = "/control-de-usuarios/registro-de-usuarios" exact>
            <RegistroUsuarios/>
        </Route>
        <Route path = "/control-de-usuarios/registro-de-usuarios/nuevo" exact>
            <NuevoUsuario/>
        </Route> 
    </Fragment>)
}

export default Routes

