import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
  FormGroupDirective,
  NgForm
} from "@angular/forms";
import { Router } from '@angular/router';
import { AlertService } from '../authentification/alert.service';
import { EtudiantService } from '../service/etudiant.service';
import { ValidationService } from '../authentification/validation.service';
import { User } from '../authentification/user';
import { Etudiant } from '../models/Etudiant';
import { Departement } from '../models/departement';
import { Niveau } from '../models/niveau';
import { ErrorStateMatcher } from '@angular/material';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  
  signupForm: FormGroup;
  loading: Boolean;
  error: string;
  

  constructor(
    private fb: FormBuilder,
    private etudiantService: EtudiantService,
    private alertService: AlertService,
    private router: Router
  ) {
    //this.createForm();
  }

  

  matcher = new MyErrorStateMatcher();
  
  ngOnInit() {
    this.createForm();
    
  }

  createForm() {
    this.signupForm = this.fb.group({
      email: [
        "",
        Validators.compose([
          ValidationService.emailValidator
        ])
      ],
      password: [
        "",
        Validators.compose([
          ValidationService.passwordValidator
        ])
      ],
      confirmP: [
        "",
        Validators.compose([
          ValidationService.passwordValidator
        ])
      ],
    });
  }
  register() {
    this.loading = true;

    let observable;
    var user = new User();
    
    user.email = this.signupForm.value.email;
    user.password = this.signupForm.value.password;
    user.emailVerified = true;
    observable = this.etudiantService.create(user);
    observable.subscribe(
      data => {
        this.alertService.success("Registration successful", true);
        this.router.navigate([
          "/authentification"
          
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