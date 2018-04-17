import 'whatwg-fetch';
// import { get } from 'https';

export function getUsers() {
    return get('users');
}

function get(url) {
    return fetch(url).then(onSuccess, onError);
}

function onSuccess(response) {
    return response.json();
}
/* eslint-disable-line no-console */
function onError(error) {
    console.log(error) 
}