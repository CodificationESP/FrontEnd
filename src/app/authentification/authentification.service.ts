import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

import "rxjs/add/operator/map";
import { User } from "./user";
@Injectable()
export class AuthenticationService {
  baseUrl = "https://codification.herokuapp.com/api/";

  headers = new Headers({
    accept: "application/json",
    "content-type": "application/json"
  });

  constructor(private http: Http) {}

  login(login: User) {
    let url = this.baseUrl;
      url += "Users/login";
    const data = JSON.stringify({
      email: login.email,
      password: login.password
    });
    return this.http
      .post(url, data, { headers: this.headers })
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        const resp = response.json();
        if (resp && resp.id) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          resp.token = resp.id;
          delete resp.id;
          localStorage.setItem("currentUser", JSON.stringify(resp));
        }

        return resp;
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
  }


  verifierCode(email: string, code: string) {
    let url = this.baseUrl;
      url += "Users/verifierCode";
    const data = JSON.stringify({ email: email, code: code });
    return this.http
      .post(url, data, { headers: this.headers })
      .map((response: Response) => {
        return response.json();
      });
  }
  resetPassword(email: string, type: string, code: string, password: string) {
    let url = this.baseUrl;
      url += "Users/reset-password";
    const data = JSON.stringify({
      email: email,
      code: code,
      nouveaumdp: password
    });
    return this.http
      .post(url, data, { headers: this.headers })
      .map((response: Response) => {
        return response.json();
      });
  }
}
