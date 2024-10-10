import { Routes } from '@angular/router';
import path from 'path';
import { LoginComponent } from './core/pages/login/login.component';
import { HomeComponent } from './core/pages/home/home.component';
import { CampaignsComponent } from './core/pages/campaigns/campaigns.component';
import { CasesComponent } from './core/pages/cases/cases.component';
import { ReportsComponent } from './core/pages/reports/reports.component';
import { AboutComponent } from './core/pages/about/about.component';
import { CaseregistrationComponent } from './Adm/caseregistration/caseregistration.component';
import { RegisterComponent } from './core/pages/register/register.component';
import { ForgotpasswordComponent } from './core/pages/forgotpassword/forgotpassword.component';
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
    },
    {
        path: 'about', component: AboutComponent
    }, 
    {
        path: 'casesregistration', component: CaseregistrationComponent
    }, 
    {
        path: 'register', component: RegisterComponent
    }, 
    {
        path: 'forgotpassword', component: ForgotpasswordComponent
    }

];
