//* 1) importar axios
import axios from 'axios'

//* 2) indicar la ruta o el endpoint 
const BASE_URL = 'http://localhost:5177' // esto lo podemos cambiar si subimos el repo de github a render

//* 3) ocupamos mandar información 
// registrar un usuario
const registerUserService = (data) => axios.post(`${BASE_URL}/register`, data)
// login 
const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data)

// información de un solo usuario -> jwt
const getUserService =(jwtToken) => axios.get(`${BASE_URL}/users/me`, {headers:{Authorization: `Bearer ${jwtToken}`}})

export {
    registerUserService,
    loginUserService,
    getUserService
}