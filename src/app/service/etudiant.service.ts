import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import {DataAccessLayer} from './data-access-layer';
import { User } from '../authentification/user';
import { Etudiant } from '../models/Etudiant';
import { CodeVerif } from '../models/codeVerif';


@Injectable()
export class EtudiantService {
    dal: DataAccessLayer;

    constructor(protected http: Http) {
       this.dal = new DataAccessLayer(this.http);
    }
    create(user: User){
        return this.dal.create(['Users'], user);
    }
    createEtudiant(user: Etudiant){
        return this.dal.create(['Etudiants'], user);
    }
    getAllEtudiants() {
        return this.dal.get(['etudiants']);
    }
    getAllDepartements(){
        return this.dal.get(['departements']);
    }
    getAllNiveaux(){
        return this.dal.get(['niveaus']);
    }
    getEtudiantById(id: string) {
        return this.dal.get(['etudiants', id]);
    }
    
    createProfile(id: string, profile: Etudiant) {
        return this.dal.create(['etudiants', id], profile);
    }
    updateProfile(etudiant: Etudiant) {
        return this.dal.update(['etudiants'], etudiant);
    }
    getAllCodifications()
    {
        return this.dal.get(['codifications']);
    }
    getAllChambres()
    {
        return this.dal.get(['chambres']);
    }
    getAllBatiments()
    {
        return this.dal.get(['batiments']);
    }
    getAllEtages()
    {
        return this.dal.get(['etages']);
    }
    getAllCouloirs()
    {
        return this.dal.get(['couloirs']);
    }
    createCodification(args:any[],data:any)
    {
        return this.dal.create(['codifications'],data);
        
    }
    
   


}
