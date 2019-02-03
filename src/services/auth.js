import query from "Utilities/query";
import { saveToken, clearToken, getToken } from "Utilities/api";

export function register(params){
    return query("auth/register", params)
}

export function login(username, password){
    query("auth/login", {username, password}).then((response)=>{
        saveToken(response.token)
    }).catch((error)=>{
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
export function changePassword(params, callback){
    var real_params = {...params}
    real_params.token = getToken();
    query("auth/changePassword", real_params).then((response)=>{
        callback(response)
    }).catch((error)=>{
        alert("Invalid user and/or password")
    })
}