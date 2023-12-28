import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {

    constructor(private http: HttpClient) {}

    isAuthenticated: boolean = false;
    token: String = '';

    login(username: string, password: string) {
        return this.http
        .post('http://localhost:8080/authenticate', {
            username: username,
            password: password
        });
    }

    /*checkIsAuthenticated() {
        return this.isAuthenticated;
    }*/

    getToken() {
        return this.token;
    }

}