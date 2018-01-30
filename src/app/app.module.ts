import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpModule,Http } from '@angular/http';
import{ ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatMenuModule, MatToolbarModule,
         MatTabsModule,MatStepperModule, MatSelectModule, MatInputModule, MatIconModule, MatExpansionModule, MatProgressSpinnerModule, MatTableModule, MatPaginatorModule, MatGridListModule, MatSnackBarModule, MatFormFieldModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AppRoutingModule } from './routes/appRouting.module';
import { AuthGuard } from './auth.guard';
import { AuthenticationService } from './authentification/authentification.service';
import { AlertService } from './authentification/alert.service';
import { InscriptionComponent } from './inscription/inscription.component';
import { EtudiantService } from './service/etudiant.service';
import { VerificationComponent } from './verification/verification.component';
import { CodificationComponent } from './codification/codification.component';
import { ListeCodificationComponent } from './liste-codification/liste-codification.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AuthentificationComponent,
    InscriptionComponent,
    VerificationComponent,
    CodificationComponent,
    ListeCodificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule ,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatMenuModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  providers: [AuthenticationService,AlertService,AuthGuard,EtudiantService,
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent]
})
export class AppModule { }
