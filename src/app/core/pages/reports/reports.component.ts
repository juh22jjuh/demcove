import { Component } from '@angular/core';
import { NavBarComponent } from "../../../shared/ui/nav-bar/nav-bar.component";
import { FooterComponent } from "../../../shared/ui/footer/footer.component";

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {

}
