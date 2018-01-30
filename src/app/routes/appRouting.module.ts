import { NgModule, Component } from '@angular/core';
import { RouterModule,Routes }  from '@angular/router';

import { AuthentificationComponent } from '../authentification/authentification.component';
import { AuthGuard } from '../auth.guard';
import { InscriptionComponent } from '../inscription/inscription.component';
import { VerificationComponent } from '../verification/verification.component';
import { AccueilComponent } from '../accueil/accueil.component';
import{CodificationComponent } from '../codification/codification.component';
import { ListeCodificationComponent } from '../liste-codification/liste-codification.component';



const routes: Routes = [
    {path: 'accueil', component: AccueilComponent,canActivate:[AuthGuard]},
    {path: '',redirectTo:'/accueil',pathMatch:'full'},
    { path: 'authentification', component: AuthentificationComponent},
    {path: 'inscription' , component:InscriptionComponent},
    {path: "verifierCode/:email", component:VerificationComponent},
    {path: 'codification',component:CodificationComponent, canActivate:[AuthGuard]},
    {path: 'liste-codification',component:ListeCodificationComponent}
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule{}