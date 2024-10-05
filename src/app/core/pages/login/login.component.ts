import { Component,  } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = new FormControl('')
  password = new FormControl('')
}
