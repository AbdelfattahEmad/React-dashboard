import axios from "axios"

const baseUrl = axios.create({baseURL:'http://127.0.0.1:8000/api/v1/'})

 export const loggedInstance = axios.create({baseURL:'http://127.0.0.1:8000/api/v1/',headers:{
    Authorization : `Bearer ${localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")).token : ""}`
}})






export default baseUrl;