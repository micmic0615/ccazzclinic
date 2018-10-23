import query from "Utilities/query";

export function read(params){
    return query("crud/read", params)
}

export function create(params){
    return query("crud/create", params)
}

export function update(params){
    return query("crud/update", params)
}

export function destroy(params){
    return query("crud/destroy", params)
}

export function email(params){
    return query("crud/email", params)
}