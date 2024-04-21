import axios from 'axios';

const instatce = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
})


export const setToken = (token) => {
    instatce.defaults.headers.common.Authorization = `Bearer ${token}`
}

export const clearToken = () => {
    instatce.defaults.headers.common.Authorization = ""
}

export const requestSingUp = async (formData) => {
const {data} = await instatce.post("/users/signup", formData);
return data
}

export const requestSingIn = async (formData) => {
    const {data} = await instatce.post("/users/login", formData);
    return data
    }

export const requestGetCurrentUser = async () => {
 const {data} = await instatce.get("/users/current" );
 return data
 }

 export const requestLogOut = async () => {
    const {data} = await instatce.get("/users/logout" );
    return data
    }