import tokenService from "./tokenService";

const BASE_URL = "/api/recs";

export function create(rec){
    return fetch(BASE_URL, {
        method: 'POST',
        body: rec,
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json());
}

export function getAll() {
    return fetch(BASE_URL, {
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json())
}