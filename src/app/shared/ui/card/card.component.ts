import { Component } from '@angular/core';
import { AboutComponent } from '../../../core/pages/about/about.component';
import { CasesComponent } from '../../../core/pages/cases/cases.component';
import { ReportsComponent } from '../../../core/pages/reports/reports.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [AboutComponent, CasesComponent, ReportsComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

}
