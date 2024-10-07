import { Component } from '@angular/core';
import { NavBarComponent } from "../../../shared/ui/nav-bar/nav-bar.component";
import { FooterComponent } from "../../../shared/ui/footer/footer.component";

@Component({
  selector: 'app-cases',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './cases.component.html',
  styleUrl: './cases.component.css'
})
export class CasesComponent {

}
