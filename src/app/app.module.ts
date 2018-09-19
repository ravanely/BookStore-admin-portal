import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatGridListModule, MatInputModule, MatToolbarModule} from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import {LoginService} from '../services/login.service';
import {HttpClientModule} from '@angular/common/http';
import {routing} from './app.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    HttpClientModule,
    MatGridListModule,
    MatInputModule,
    routing
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
