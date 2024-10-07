import { Component } from '@angular/core';
import { CarouselComponent } from "../../../shared/ui/carousel/carousel.component";
import { NavBarComponent } from "../../../shared/ui/nav-bar/nav-bar.component";
import { FooterComponent } from "../../../shared/ui/footer/footer.component";
import { CardComponent } from "../../../shared/ui/card/card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, NavBarComponent, FooterComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
