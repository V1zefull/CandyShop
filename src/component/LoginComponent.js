import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import {login} from "../http/userAPI";
import Input from "../input/Input";
import {NavLink} from "react-router-dom";

const Login = (() => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    return (
        <div className="Form">
            <p className="RegLog">Вход</p>
            <form className="InputForm">
                <Input value={email} setValue={setEmail} type="text" placeholder=" Введите почту"/>
                <Input value={password} setValue={setPassword} type="password" placeholder=" Введите пароль"/>
            </form>
            <NavLink to='/'><button type="submit" onClick={() => dispatch(login(email, password))}>Войти</button></NavLink>
        </div>
    );
})

export default Login