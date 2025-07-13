import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { RouteConfigLoadEnd, ActivatedRoute, Router, RouterLink } from '@angular/router';
import axios from 'axios';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-display-artist',
  imports: [CommonModule, ReactiveFormsModule,FormsModule, RouterLink,NavbarComponent],
  templateUrl: './display-artist.component.html',
  styleUrl: './display-artist.component.css'
})
export class DisplayArtistComponent implements OnInit {
  constructor(private router: Router, private fb: FormBuilder,private route: ActivatedRoute) {}
  c_id= "";
  res: any;
  ngOnInit(): void {
    this.c_id = this.route.snapshot.paramMap.get('artist_id') || "";
    console.log("hello this is artist id ",this.c_id);
    axios.get('http://localhost:8080/artist/'+this.c_id)
    .then(response=>{
      console.log(response.data);
      this.res = response.data;
    })
  }

  openEmail(Email_id: string){
    const subject = encodeURIComponent('Catering service Inquiry');
    const body = encodeURIComponent('Hello, I am interested in the service provided by you. Please provide more details.');
    // Open email app
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${Email_id}&su=${subject}&body=${body}`, '_blank');
  }

  openWhatsApp(phoneNumber: number) {
    const message = encodeURIComponent("Hello, I'm interested in your services!");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  }

}