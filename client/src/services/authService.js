import * as request from "./requester";

const baseUrl = 'http://localhost:3030/users';

export const login = (username, password) => 
    request.post(`${baseUrl}/login`, { username, password });