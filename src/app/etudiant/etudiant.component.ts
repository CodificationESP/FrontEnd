import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EtudiantService } from '../service/etudiant.service';
import { AlertService } from '../authentification/alert.service';
import { Router } from '@angular/router';
import { ValidationService } from '../authentification/validation.service';
import { Etudiant } from '../models/Etudiant';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  signupForm: FormGroup;
  loading: Boolean;
  error: string;
  utilisateur = JSON.parse(localStorage.getItem('currentUser')).userId;
  
  

  constructor(
    private fb: FormBuilder,
    private etudiantService: EtudiantService,
    private alertService: AlertService,
    private router: Router
  ) {
    //this.createForm();
  }

  

  
  
  ngOnInit() {
    this.createForm();
    
  }

  createForm() {
    this.signupForm = this.fb.group({
      numEtud: [
        "",
       
      ],
      nomEtud: [
        "",
        Validators.required
      ],
      prenomEtud: [
        "",
        Validators.required
      ],
      dateNaiss: [
        "",
        Validators.required
      ],
      departement: [
        "",
        Validators.required
      ],
      genre: [
        "",
        Validators.required
      ],
      niveau: [
        "",
        Validators.required
      ],
      formation: [
        "",
        Validators.required
      ],
      utilisateurId: [
        "",
        Validators.required
      ],
    });
  }
  updateProfil() {
    this.loading = true;

    let observable;
    var user = new Etudiant();
    
    user.numEtudiant = this.signupForm.value.numEtud;
    user.nomEtudiant = this.signupForm.value.nomEtud;
    user.prenomEtudiant = this.signupForm.value.prenomEtud;
    user.dateNaissance = this.signupForm.value.dateNaiss;
    user.departement = this.signupForm.value.departement;
    user.genre = this.signupForm.value.genre;
    user.niveau = this.signupForm.value.niveau;
    user.formation = this.signupForm.value.formation;
    user.utilisateurId = this.utilisateur;
    observable = this.etudiantService.createEtudiant(user);
    observable.subscribe(
      data => {
        this.alertService.success("Registration successful", true);
        this.router.navigate([
          "/accueil"
          
        ]);
      },
      error => {
        this.alertService.error(error);
        console.log("====================================");
        console.log(error);
        console.log("====================================");
        this.loading = false;
        this.error = error;
      }
    );
  }
}
