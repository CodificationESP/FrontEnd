import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import * as url from 'url';
import {ParamMap, Params} from "@angular/router";
import {map} from "rxjs/operator/map";

export class DataAccessLayer {

    baseUrl = "https://codification.herokuapp.com/api";
    private http: Http;

    constructor( http: Http) {
        this.http = http;

    }

    private url(args: any[], params?: Array<[string, string|number ]>) {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        params = params || [];
        params.push(['access_token', currentUser && currentUser.token]);

        let path: string = args && args.join('/');
        let paramsStr:string = params.filter(  tab => tab && tab.length==2 && tab[0] && tab[1] ).map(tab => tab.join('=') ).join('&');

        return this.baseUrl + '/' + path + '?' + paramsStr;
    }
    get( args: any[], params?: Array<[string, string|number ]>) {

        return this.http.get(this.url(args, params),
            this.jwt()
        ).map((response: Response) => response.json());
    }

    create(args: any[], data: any, params?: Array<[string, string|number ]>) {
        return this.http.post(
            this.url(args, params),
            JSON.stringify(data),
            this.jwt(),
        ).map((response: Response) => response.json());
    }

    update(args: any[],data: any, params?: Array<[string, string|number ]>) {

        return this.http.put(
            this.url(args,params),
            JSON.stringify(data),
            this.jwt()
        ).map((response: Response) => response.json());
    }

    delete(args: any[], params?: Array<[string, string|number ]>) {
        return this.http.delete(
            this.url(args,params),
            this.jwt()
        ).map((response: Response) => response.json());
    }
    protected jwt() {
        // create authorization clients-header with jwt token
        let headers;
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        headers = currentUser && currentUser.token ? new Headers({
            'Authorization': 'Bearer ' + currentUser.token,
            'content-type': 'application/json',
            'accept': 'application/json'
        }) : new Headers({'accept': 'application/json', 'content-type': 'application/json'});
        return new RequestOptions({ headers: headers });
    }
}
