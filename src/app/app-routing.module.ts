import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { SkillsComponent } from 'app/skills/skills.component';
import { AppComponent } from 'app/app.component';
import { HomeComponent } from 'app/home/home.component';
import { AboutComponent } from 'app/about/about.component';
import { ContactComponent } from 'app/contact/contact.component';
import { PageNotFoundComponent } from 'app/page-not-found/page-not-found.component';
import { Component } from '@angular/core/src/metadata/directives';
import { LocationComponent } from 'app/location/location.component';
import { IndiaComponent } from 'app/location/india/india.component';
import { UsaComponent } from 'app/location/usa/usa.component';
import { CanActivateViaAuthGuard } from './can-activate-via-auth-guard';
import { LoginComponent } from 'app/login/login.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
    { path: '', pathMatch: 'full',component: HomeComponent},
    { path: 'formtest', pathMatch: 'full',component: FormComponent},
    { path: 'skills', pathMatch: 'full', component: SkillsComponent},
    { path: 'about', pathMatch: 'full', component: AboutComponent},
    { path: 'contact', pathMatch: 'full', component: ContactComponent},
    { path: 'location', component: LocationComponent,
        children: [ 
            {
                path: 'india', component: IndiaComponent
            },
            {
                path: 'usa', component: UsaComponent
            }
        ],
        canActivate: [CanActivateViaAuthGuard],
        data: {
            expectedRole: 'admin'
        }
    },
    { path: 'page-not-found', pathMatch: 'full', component: PageNotFoundComponent},
    { path: 'login', pathMatch: 'full', component: LoginComponent},
    { path: '**', redirectTo: 'page-not-found'}
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}