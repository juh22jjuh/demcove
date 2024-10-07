import { Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './core/pages/login/login.component';
import { HomeComponent } from './core/pages/home/home.component';
import { CampaignsComponent } from './core/pages/campaigns/campaigns.component';
import { CasesComponent } from './core/pages/cases/cases.component';
import { ReportsComponent } from './core/pages/reports/reports.component';

export const routes: Routes = [
    {
        path: 'login', component: LoginComponent
    },
    {
        path: '', component: HomeComponent
    },
    {
        path: 'campaigns', component: CampaignsComponent
    },
    {
        path: 'cases', component: CasesComponent
    },
    {
        path: 'reports', component: ReportsComponent
    }
];
