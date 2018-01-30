
import {Observable} from "rxjs/Observable";
import {DataSource} from "@angular/cdk/collections";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import { Codification } from "../models/codification";


export class ListeCodificationDataSource extends DataSource<Codification>{

    constructor(private behaviorSubject: BehaviorSubject<Codification[]>){
        super();
    }

    connect(): Observable<Codification[]> {
        return this.behaviorSubject;
    }

    disconnect() {}
}