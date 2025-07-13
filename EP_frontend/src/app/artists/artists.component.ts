import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { response } from 'express';

@Component({
  selector: 'app-artists',
  imports: [CommonModule, NavbarComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './artists.component.html',
  styleUrl: './artists.component.css'
})
export class ArtistsComponent implements OnInit{
  art:any = [];
  a_type:any;
  constructor(private router:Router, private fb: FormBuilder, private route: ActivatedRoute){}
    ngOnInit(): void{
      this.a_type = this.route.snapshot.paramMap.get('type');
      console.log(this.a_type);
      axios.get('http://localhost:8080/getartist/'+this.a_type)
      .then(response=>{
        console.log(response.data);
        this.art = response.data;
      })
    }
    dis(e:any){
      console.log(e);
      console.log(e.artist_id);
      this.router.navigate(['/displayArtist',e.artist_id]);
    }
  }

