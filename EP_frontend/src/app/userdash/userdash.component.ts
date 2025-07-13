import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-userdash',
  imports: [RouterLink, NavbarComponent],
  templateUrl: './userdash.component.html',
  styleUrl: './userdash.component.css'
})
export class UserdashComponent {

}
