import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Codification } from '../models/codification';
import { ListeCodificationDataSource } from './liste-codification-data-source';
import { EtudiantService } from '../service/etudiant.service';
import { Etudiant } from '../models/Etudiant';
import { Chambre } from '../models/chambre';

@Component({
  selector: 'app-liste-codification',
  templateUrl: './liste-codification.component.html',
  styleUrls: ['./liste-codification.component.css']
})
export class ListeCodificationComponent implements OnInit {

  id: string;
  codifications: Codification[] = [];
  etudiants: Etudiant[] = [];
  chambres: Chambre[]= [];
  // MdPaginator Inputs
  length = 0;
  pageSize = 0;
  index: number;
  pageSizeOptions: number[] = [];
  ready: boolean = false;
  dataSource: ListeCodificationDataSource = null;
  displayedColumns = [ "cne","nom", "prenom", "chambre", "position","date"];
  behaviorSubject: BehaviorSubject<Codification[]> = null;
  constructor(private etudiantService:EtudiantService) { }

  ngOnInit() {
    this.loadAllCodifications();
    this.loadAllEtudiants();
    this.loadAllChambres();
  }

  setMdTable(){
    this.length = this.codifications.length;
    this.pageSize = 5;
    this.index = this.index || 0;
    this.pageSizeOptions = [];
    for (let i = 5; i < this.length; i = i + 1) {
        this.pageSizeOptions.push(i);
    }
  }

    loadAllCodifications():void{
      this.etudiantService.getAllCodifications().subscribe(codifications => {
          this.codifications = codifications;
          this.setMdTable();
          this.behaviorSubject = new BehaviorSubject<Codification[]>(
              this.getPageListeCodifs()
          );
          this.dataSource = new ListeCodificationDataSource(this.behaviorSubject);
          this.ready = true;
      });
    }
    getPageListeCodifs(): Codification[] {
      return this.codifications.slice(
        this.index * this.pageSize,
        (this.index + 1) * this.pageSize
      );
    }

    loadAllEtudiants():void
    {
      this.etudiantService.getAllEtudiants().subscribe(etudiants => {
        this.etudiants = etudiants;
      });
    }
    loadAllChambres():void
    {
      this.etudiantService.getAllChambres().subscribe(chambres => {
        this.chambres = chambres;
      });
    }
  


}
