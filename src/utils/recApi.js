import { post } from "../../routes/api/users";
import tokenService from "./tokenService";

const BASE_URL = "/api/recs";

export function create(rec){
    return fetch(BASE_URL, {
        method: 'POST',
        body: post,
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json());
}