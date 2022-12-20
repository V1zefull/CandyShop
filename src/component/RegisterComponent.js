import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import { signup } from '../http/userAPI.js'
import Input from '../input/Input'

const Signup = (() => {
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")
    const [surname,setSurname] = useState("")
    return (
        <div className="Form">
            <p className="RegLog">Регистрация</p>
            <form className="InputForm">
                <Input value={email} setValue={setEmail} type="text" placeholder=" Введите почту"/>
                <Input value={password} setValue={setPassword} type="password" placeholder=" Введите пароль"/>
                <Input value={name} setValue={setName} type="text" placeholder=" Введите ваше имя"/>
                <Input value={surname} setValue={setSurname} type="text" placeholder=" Введите вашу фамилию"/>
            </form>
            <p className="log">Если у вас уже есть аакаунт то <NavLink to="/Login">Войдите</NavLink></p>
            <button type="submit" onClick={()=> signup(email, password, name, surname)}>Зарегистрироваться</button>
        </div>
    )
})

export default Signup