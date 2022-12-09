import axios from "axios";
import {setAdmin, setUser} from "../reducers/userReducer";

export const signup = async (email, password, name, surname) => {
    try {
        const response = await axios.post('http://localhost:7000/api/auth/registration',{
            email,
            password,
            name,
            surname
        })
        alert(response.data.message)
    }catch (e){
        alert(e.response.data.message)
    }
}

export const login = (email, password) => {
    return async dispatch =>{
        try {
            const response = await axios.post('http://localhost:7000/api/auth/login',{
                email,
                password
            })
            if (response.data.user.role === "ADMIN") {
                dispatch(setUser(response.data.user))
                dispatch(setAdmin(response.data.user.role))
                // console.log(response.data.user.role);
            }
            else{
                dispatch(setUser(response.data.user))
            }
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('name', response.data.user.name)
            localStorage.setItem('surname', response.data.user.surname)
        }catch (e){
            alert(e.response.data.message)
        }
    }
}

export const auth =  () => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:7000/api/auth/auth`,
                {headers:{'Authorization':`Bearer ${localStorage.getItem('token')}`}}
            )
            if (response.data.user.role === "ADMIN") {
                dispatch(setUser(response.data.user))
                dispatch(setAdmin(response.data.user.role))
            }
            else{
                dispatch(setUser(response.data.user))
            }
            localStorage.setItem('token', response.data.token)
        } catch (e) {
            localStorage.removeItem('token')
        }
    }
}
