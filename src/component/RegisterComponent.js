import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import { signup } from '../http/userAPI.js'
import Input from '../input/Input'

const Signup = (() => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    return (
        <div className="Form">
            <p className="RegLog">Register</p>
            <form className="InputForm">
                <Input value={email} setValue={setEmail} type="text" placeholder=" Email"/>
                <Input value={password} setValue={setPassword} type="password" placeholder=" Password"/>
            </form>
            <p className="log">if you already have account <NavLink to="/Login">LOGIN</NavLink></p>
            <button type="submit" onClick={()=> signup(email, password)}>Register</button>
        </div>
    )
})

export default Signup