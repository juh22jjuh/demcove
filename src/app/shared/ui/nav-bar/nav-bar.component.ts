import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CampaignsComponent } from '../../../core/pages/campaigns/campaigns.component';
import { CasesComponent } from '../../../core/pages/cases/cases.component';
import { ReportsComponent } from '../../../core/pages/reports/reports.component';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CampaignsComponent,CasesComponent,ReportsComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

}
