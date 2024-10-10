import { Component,  } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormControl } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RegisterComponent, ForgotpasswordComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = new FormControl('')
  password = new FormControl('')
}
