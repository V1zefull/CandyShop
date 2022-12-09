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
            <p className="RegLog">Login</p>
            <form className="InputForm">
                <Input value={email} setValue={setEmail} type="text" placeholder=" Email"/>
                <Input value={password} setValue={setPassword} type="password" placeholder=" Password"/>
            </form>
            <NavLink to='/'><button type="submit" onClick={() => dispatch(login(email, password))}>Login</button></NavLink>
        </div>
    );
})

export default Login