import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import{routes} from './apps.routes';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AngularFireModule} from '@angular/fire';
import { ReactiveForms } from './reactiveforms/reactiveforms.component';

import {AngularFireDatabaseModule} from '@angular/fire/database';
import { LoginComponent } from './login/login.component';
const config = {
  apiKey: "AIzaSyAi_a_DXh4y-CfuqlbFyVAICm74Aitm73w",
  authDomain: "market-881ec.firebaseapp.com",
  databaseURL: "https://market-881ec.firebaseio.com",
  projectId: "market-881ec",
  storageBucket: "market-881ec.appspot.com",
  messagingSenderId: "567316811263"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ReactiveForms,
    LoginComponent,
    ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
