import query from "Utilities/query";
import { clearToken } from "Utilities/api";

export function getMyChildren(callback){
    query("user/getMyChildren", {}).then((children)=>{
        callback(null, children)
    }).catch(()=>{
        clearToken()
    })
}

export function getMySpouse(callback){
    query("user/getMySpouse", {}).then((spouse)=>{
        callback(null, spouse)
    }).catch(()=>{
        clearToken()
    })
}

export function getMyFriends(callback){
    query("user/getMyFriends", {}).then((friends)=>{
        callback(null, friends)
    }).catch(()=>{
        clearToken()
    })
}

export function addMyChild(params){
    return query("user/addMyChild", params)
}

export function addMySpouse(params){
    return query("user/addMySpouse", params)
}

export function addMyFriend(params){
    return query("user/addMyFriend", params)
}

export function updateMyProfilePic(params){
    return query("user/updateMyProfilePic", params)
}