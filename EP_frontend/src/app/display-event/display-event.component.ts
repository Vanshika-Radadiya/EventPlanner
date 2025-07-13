import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import axios from 'axios';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-display-event',
  imports: [CommonModule, ReactiveFormsModule,FormsModule, RouterLink,NavbarComponent
    
  ],
  templateUrl: './display-event.component.html',
  styleUrl: './display-event.component.css'
})
export class DisplayEventComponent implements OnInit {
  // constructor(private router:Router, private route:ActivatedRoute)
    constructor(private router: Router, private fb: FormBuilder,private route: ActivatedRoute) {}
    e_id= "";
    res: any;
    ngOnInit(): void {
      this.e_id = this.route.snapshot.paramMap.get('event_id') || "";
      console.log("hello this is ",this.e_id);
      axios.get('http://localhost:8080/event/'+this.e_id)
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
