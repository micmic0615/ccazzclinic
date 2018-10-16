export function saveToken(token){
    localStorage.setItem("CCAZZ_TOKEN", token);
    window.location.reload();
}

export function getToken(){
    return localStorage.getItem("CCAZZ_TOKEN");
}

export function clearToken(){
    localStorage.removeItem("CCAZZ_TOKEN");
    window.location.reload();
}