import axios from 'axios';

export default function(route, params){
    return new Promise(function (resolve, reject) {
        params.token = localStorage.getItem("CCAZZ_TOKEN");

        axios
        .post(process.env.PUBLIC_URL + "/api/" + route, params)
        .then(response => {
            resolve(response.data);
        })
        .catch(error => {
            reject(error.response.data)
        });
    })
}