import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormGroupDirective,
  NgForm,
  FormArray
} from "@angular/forms";
import { EtudiantService } from '../service/etudiant.service';
import { Batiment } from '../models/batiment';
import { Etage } from '../models/etage';
import { Couloir } from '../models/couloir';
import { Chambre } from '../models/chambre';
import { Codification } from '../models/codification';
import { Router } from '@angular/router';
@Component({
  selector: 'app-codification',
  templateUrl: './codification.component.html',
  styleUrls: ['./codification.component.css']
})
export class CodificationComponent implements OnInit {
  codification: Codification;
  codifications: Codification[];
  isLinear = true;
  myformGroup: FormGroup;
 // items:any[] =[];
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  forthFormGroup: FormGroup;
  batiments:Batiment[];
  etages:Etage[];
  couloirs:Couloir[];
  chambres: Chambre[];
  ready: boolean;
   userId = JSON.parse(localStorage.getItem('currentUser')).userId;
  constructor(private fb: FormBuilder,private router:Router,private etudiantService:EtudiantService) {
    this.resetCodification();
   }

  ngOnInit() {
   /* this.myformGroup = this.fb.group({
      items: this.fb.array([ this.createItem() ])
      
    })*/
    console.log(this.userId);
    this.firstFormGroup = this.fb.group({
      firstCtrl:[]
    })
    this.secondFormGroup = this.fb.group({
            secondCtrl:['']
    });
    this.thirdFormGroup = this.fb.group({
      thirdCtrl:['']
    });
    this.forthFormGroup = this.fb.group({
      forthCtrl:['']
    });
    this.loadAllBatiment();
    this.loadAllEtages();
    this.loadAllCouloirs();
    this.loadAllChambres();
    this.loadAllCodifications();

}

/*createItem(): FormGroup {
  return this.fb.group({
    firstCtrl:'',
      secondCtrl:'',
      thirdCtrl:'',
      forthCtrl:''
  });
}*/

loadAllBatiment():void{
  this.etudiantService.getAllBatiments().subscribe( batiments =>{
    this.batiments = batiments;
    this.ready= true;

  })
}

loadAllEtages():void{
  this.etudiantService.getAllEtages().subscribe( etages =>{
    this.etages = etages;

  })
}

loadAllCouloirs():void{
  this.etudiantService.getAllCouloirs().subscribe( couloirs =>{
    this.couloirs = couloirs;

  })
}

loadAllChambres():void{
  this.etudiantService.getAllChambres().subscribe( chambres =>{
    this.chambres = chambres;

  })
}
loadAllCodifications():void{
  this.etudiantService.getAllCodifications().subscribe(codifications => {
      this.codifications = codifications;
  })

}
add():void {
  this.etudiantService.createCodification(['codifications'],this.codification).subscribe(
    codification =>{
      this.codifications.push(codification);
  });
  console.log(this.codification);
}
resetCodification():void {
  this.codification = new Codification({id:"",chambreId:"",etudiantId:this.userId,date:new Date(),position:2});
  
}
goback():void{
  this.router.navigate(['/accueil']);
}
}



