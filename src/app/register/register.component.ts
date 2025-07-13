import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import axios from 'axios';
import { stringify } from 'querystring';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule], 
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{ 
  myForm!: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['',Validators.required],
      email: ['',Validators.required],
      password: ['',Validators.required],
      mobile: ['',Validators.required],
      address: "ahmedabad",
      a_role: null,
      user_type: "Customer"
    });
    }   

    onSubmit(form: FormGroup) {
      if(form.valid == false){
        alert("Invalid details!");
        return;
      }

      console.log('Valid?', form.valid); // true or false
      console.log('Name', form.value.name);
      console.log('Email', form.value.email);
      console.log('user_type', form.value.user_type);
      if(form.value.user_type == "Artist - Singer"){
        form.value.a_role = "Singer";
        form.value.user_type = "Artist";
      }
      else if(form.value.user_type == "Artist - Dancer"){
        form.value.a_role = "Dancer";
        form.value.user_type = "Artist";
      }
      else if(form.value.user_type == "Artist - Musician"){
        form.value.a_role = "Musician";
        form.value.user_type = "Artist";
      }
      else if(form.value.user_type == "Artist - Anchor"){
        form.value.a_role = "Anchor";
        form.value.user_type = "Artist";
      }
      else if(form.value.user_type == "Artist - Magician"){
        form.value.a_role = "Magician";
        form.value.user_type = "Artist";
      }
     
      axios.post('http://localhost:8080/saveUser', form.value)
      .then(Response =>alert("User created Successfully !"));

    }
}
