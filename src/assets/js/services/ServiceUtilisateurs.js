import {ServiceXhr} from "./ServiceXhr";

export const ServiceUtilisateur = {
    login: async (email, password) => {
        const data = JSON.stringify({email: email, password: password});
        return ServiceXhr.callWithoutAuth("http://localhost:8080/api/users/login", data, "POST");
    },

    register: async (email, password) => {
        const data = JSON.stringify({email: email, password: password});
        return ServiceXhr.callWithoutAuth('http://localhost:8080/api/users/register', data, "POST");
    },

    getInfo: async () => {
        return ServiceXhr.callWithAuthNoBody("http://localhost:8080/api/users/info", "GET");
    }
}