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
            console.log(response.data.user.role);
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
            localStorage.setItem('userId', response.data.user.id)
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

export const TypeGet = async() =>{
    try {
        const {data} = await axios.get(`http://localhost:7000/api/type`)
        return data;
        // console.log(response.data)
    }catch (e) {

    }
}

export const TypeGetOne = async(id) =>{

    try {
        const {data} = await axios.get(`http://localhost:7000/api/type/getOne/` + id)
        return data;
    }catch (e) {

    }
}

export const TrainerGetAll = async() =>{
    try {
        const {data} = await axios.get(`http://localhost:7000/api/trainer/getAll`)
        return data;
        // console.log(response.data)
    }catch (e) {

    }
}

export const TrainerGetOne = async(id) =>{
    try {
        const {data} = await axios.get(`http://localhost:7000/api/trainer/getOne/` + id)
        return data;
        // console.log(response.data)
    }catch (e) {

    }
}

export const TrainerDeleteOne = async(id) =>{
    try {
        const {data} = await axios.post(`http://localhost:7000/api/trainer/delete/` + id)
        return data;
        // console.log(response.data)
    }catch (e) {

    }
}

export const TrainerUpdate = async(name, id, number, brandId) =>{
    try {
        const {data} = await axios.post(`http://localhost:7000/api/trainer/update/` + id, {
            name,
            number,
            brandId
        })
        return data;
        // console.log(response.data)
    }catch (e) {

    }
}

export const BrandGet = async(id) =>{
    try {
        const {data} = await axios.get(`http://localhost:7000/api/brand/getOne/` + id)
        return data;
        // console.log(response.data)
    }catch (e) {

    }
}

export const BrandGetAll = async() =>{
    try {
        const {data} = await axios.get(`http://localhost:7000/api/brand/getAll`)
        return data;
        // console.log(response.data)
    }catch (e) {

    }
}

export const ServiceOneDelete = async(id) =>{
    try {
        const {data} = await axios.post(`http://localhost:7000/api/service/delete/` + id)
        return data;
        // console.log(response.data)
    }catch (e) {

    }
}


export const ServiceOneUpdate = async(id, name) =>{
    try {
        const {data} = await axios.post(`http://localhost:7000/api/service/update/` + id, {
            name
        })
        return data;
        // console.log(response.data)
    }catch (e) {

    }
}

export const ServiceInfoOneUpdate = async(serviceId, titleOld, title, description) =>{
    try {
        const {data} = await axios.post(`http://localhost:7000/api/serviceInfo/update/`+ titleOld + '/' + serviceId, {
            title,
            description
        })
        return data;
        // console.log(response.data)
    }catch (e) {

    }
}

export const ServiceTypeGetAll = async() =>{
    try {
        const {data} = await axios.get(`http://localhost:7000/api/type/service/getAll`)
        return data;
        // console.log(response.data)
    }catch (e) {

    }
}

export const ServiceTypeGetOne = async(id) =>{
    try {
        const {data} = await axios.get(`http://localhost:7000/api/type/service/getOne/`+ id)
        return data;
        // console.log(response.data)
    }catch (e) {

    }
}

export const ServiceTypeUpdate = async(id, name) =>{
    try {
        const {data} = await axios.post(`http://localhost:7000/api/type/service/update/`+ id,{
            name
        })
        return data;
        // console.log(response.data)
    }catch (e) {

    }
}

export const ServiceGetAll = async() =>{
    try {
        const {data} = await axios.get(`http://localhost:7000/api/service/getAll`)
        return data;
        // console.log(response.data)
    }catch (e) {

    }
}

export const ServiceGetOne = async(id) =>{
    try {
        const {data} = await axios.get(`http://localhost:7000/api/service/getOne/`+ id)
        return data;
        // console.log(response.data)
    }catch (e) {

    }
}

export const ServiceInfoGet = async(serviceId) =>{
    try {
        const {data} = await axios.get(`http://localhost:7000/api/serviceInfo/getOne/`+ serviceId)
        return data;
        // console.log(response.data)
    }catch (e) {

    }
}

export const addServiceType = async (name) => {
    try {
        const response = await axios.post('http://localhost:7000/api/type/service/create',{
            name
        })
    }catch (e){
        alert(e.response.data.message)
    }
}

export const addService = async (name, servicesTypeId) => {
    try {
        const response = await axios.post('http://localhost:7000/api/service/create',{
            name,
            servicesTypeId
        })
    }catch (e){
        alert(e.response.data.message)
    }
}

export const addServiceInfo = async (title, description, serviceId) => {
    try {
        const response = await axios.post('http://localhost:7000/api/serviceInfo/create',{
            title,
            description,
            serviceId
        })
    }catch (e){
        alert(e.response.data.message)
    }
}


export const addTrainer = async (name, number, brandId, trainerTypeId) => {
    try {
        const response = await axios.post('http://localhost:7000/api/trainer/create',{
            name,
            number,
            brandId,
            trainerTypeId
        })
    }catch (e){
        alert(e.response.data.message)
    }
}

export const addTrainerType = async (name) => {
    try {
        const response = await axios.post('http://localhost:7000/api/type/create',{
            name
        })
    }catch (e){
        alert(e.response.data.message)
    }
}

export const addTrainerBrand = async (name) => {
    try {
        const response = await axios.post('http://localhost:7000/api/brand/create',{
            name
        })
        alert(response.data.message)
    }catch (e){
        alert(e.response.data.message)
    }
}


export const ADDServiceForUser = async (number, userId, serviceName, serviceType, serviceId, servicesTypeId) => {
    try {
        const response = await axios.post('http://localhost:7000/api/service/AddUser',{
            number,
            userId,
            serviceName,
            serviceType,
            serviceId,
            servicesTypeId
        })

    }catch (e){
        alert(e.response.data.message)
    }
}

export const getUserServAll = async() =>{
    try {
        const {data} = await axios.get(`http://localhost:7000/api/service/getAllUsServAll`)
        return data;
        // console.log(response.data)
    }catch (e) {

    }
}

export const getUserServ = async(id) =>{
    try {
        const {data} = await axios.get(`http://localhost:7000/api/service/getAllUsServ/`+ id)
        return data;
        // console.log(response.data)
    }catch (e) {

    }
}
