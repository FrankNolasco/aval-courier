import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Logo from '../shared/components/Template/Logo'
import { Button, Input } from 'antd';
import { useUsuario } from '../App/hooks/global/UsuarioContext';
const inputArray = ['username','password']
function Login() {
    const { register , setValue , handleSubmit } = useForm();
    const { handleLogin } = useUsuario()

    useEffect(() => {
        inputArray.forEach(ia => {
            register(ia)
        });
        return () => {}
    }, [register])

    return (
        <div className="Login-template">
            <div className="Bienvenida-login">
                <span>Bienvenido a </span><Logo/>
            </div>
            <form className="formulario-login" onSubmit = {handleSubmit((data)=> handleLogin(data))}>
               <Input onChange= {(e) => setValue('username',e.target.value)}/> 
               <Input onChange= {(e) => setValue('password',e.target.value)} type="password"/> 
               <Button htmlType="submit">
                   INICIAR SESION
               </Button>
            </form>
        </div>
    )
}

export default Login
