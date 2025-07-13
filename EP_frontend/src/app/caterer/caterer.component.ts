import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-caterer',
  imports: [CommonModule, NavbarComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './caterer.component.html',
  styleUrl: './caterer.component.css'
})
export class CatererComponent implements OnInit{
  cat:any=[];

    constructor(private router:Router, private fb: FormBuilder, private route: ActivatedRoute){}
  ngOnInit(): void{
    axios.get('http://localhost:8080/getCaterer')
    .then(response=>{
      console.log(response.data);
      this.cat = response.data;
    })
  }
  dis(e:any){
    console.log(e);
    console.log(e.menu_id);
    this.router.navigate(['/displayCaterer',e.menu_id]);
  }
}

  

