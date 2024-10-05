import { Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './core/pages/login/login.component';
import { HomeComponent } from './core/pages/home/home.component';

export const routes: Routes = [
    {
        path: 'login', component: LoginComponent
    },
    {
        path: '', component: HomeComponent
    }
];
