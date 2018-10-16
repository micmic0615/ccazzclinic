import query from "Utilities/query";
import { saveToken, clearToken, getToken } from "Utilities/api";

export function register(params){
    return query("auth/register", params)
}

export function login(params){
    query("auth/login", params).then((response)=>{
        saveToken(response.token)
    }).catch((error)=>{
        console.log(error)
        alert("Invalid user and/or password")
    })
}

export function logout(){
    clearToken()
}

export function validateToken(callback){
    query("auth/validateToken", {token: getToken()}).then((response)=>{
        callback(null, response)
    }).catch((error)=>{
        callback(error, null)
    })
}