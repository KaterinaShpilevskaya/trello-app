import { Modal } from "./Modal.js";

export class API {
    static #route ='https://63061518697408f7edd23566.mockapi.io/todos/'

    static async getUsers() {
        const response = await fetch (API.#route);
        if(response.ok) {
            const todos = await response.json();
            return todos;
        } else {
            throw new Error (response.statusText);
        }
    }

    static async getUser(id) {
        Modal.addLoaderLayout();
        const response = await fetch(API.#route + id);
        if(response.ok) {
            const user = await response.json();
            Modal.removeLoaderLayout();
            return user;
        } else {
            throw new Error (response.statusText);
        }
    }
    
    static async putUser(id, body) {
        const bodyContent = JSON.stringify(body);

        const headerList = {
            "Content-type": "application/json"
        }
        const options = {
            method: 'PUT',
            body:bodyContent,
            headers: headerList,
        }
        const response = await fetch(API.#route + id, options);
        if(response.ok) {
            const user = await response.json();
            return user;
        } else {
            throw new Error (response.statusText);
        }
    }
}