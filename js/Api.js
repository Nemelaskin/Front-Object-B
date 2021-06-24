const API_URL = "http://localhost:5000/api/";
//const API_URL = "http://26.26.5.158:5000/api/";

function apiFetch(path, init) {
    return fetch(API_URL + path, init);
}