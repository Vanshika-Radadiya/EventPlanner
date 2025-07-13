import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ActivatedRoute,RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import axios from 'axios';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { response } from 'express';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-search-list',
  imports: [ CommonModule, NavbarComponent, ReactiveFormsModule, FormsModule,RouterLink],
  templateUrl: './search-list.component.html',
  styleUrl: './search-list.component.css'
})
export class SearchListComponent implements OnInit {
  evn:any = [];
  constructor(private router: Router, private fb: FormBuilder,private route: ActivatedRoute) {}
  myForm!: FormGroup;
   type = "birthday";
  ngOnInit(): void{
    this.type = this.route.snapshot.paramMap.get('title') || 'birthday';
    this.myForm = this.fb.group({
      searchCity: ""
    });
  }

  onSubmit(form: FormGroup){
    console.log('City is ',form.value.searchCity);
    axios.get('http://localhost:8080/type/'+this.type+'/location/'+form.value.searchCity)
    .then(response =>{
      console.log(response.data);
        this.evn = response.data;  
      console.log(this.evn);
    })
  }

  dis(e:any){
    console.log(e);
    console.log(e.event_id);
    this.router.navigate(['/displayEvent',e.event_id]);
  }
}
