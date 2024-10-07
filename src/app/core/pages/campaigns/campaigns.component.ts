import { Component } from '@angular/core';
import { NavBarComponent } from "../../../shared/ui/nav-bar/nav-bar.component";
import { FooterComponent } from "../../../shared/ui/footer/footer.component";

@Component({
  selector: 'app-campaigns',
  standalone: true,
  imports: [NavBarComponent, FooterComponent],
  templateUrl: './campaigns.component.html',
  styleUrl: './campaigns.component.css'
})
export class CampaignsComponent {

}
