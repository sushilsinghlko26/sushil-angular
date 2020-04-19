import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LocationComponent } from './location/location.component';
import { IndiaComponent } from './location/india/india.component';
import { UsaComponent } from './location/usa/usa.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from 'app/auth.service';
import { CanActivateViaAuthGuard } from 'app/can-activate-via-auth-guard';
import { DataService } from 'app/shared/data.service';
import { ProgressBarService } from 'app/shared/interceptors/progress-bar.service';
import { FormComponent } from './form/form.component';
import { AddressComponent } from './form/address.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    LocationComponent,
    LocationComponent,
    IndiaComponent,
    UsaComponent,
    LoginComponent,
    FormComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    CanActivateViaAuthGuard,
    DataService,
    { provide: HTTP_INTERCEPTORS, useClass: ProgressBarService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
