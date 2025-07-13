import { Component, ElementRef, OnInit, Renderer2, ViewChild, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';
import { response } from 'express';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  constructor(private router: Router, private fb: FormBuilder) {}
  myForm!: FormGroup;

    goToRegister() {
      this.router.navigate(['/register']);
    }
    goToDash(){
      this.router.navigate(['userdash']);
    }

    ngOnInit(): void {
      this.myForm = this.fb.group({
        name: "",
        email: "",
        password: "",
        mobile: "",
        address: "ahmedabad",
        a_role: null,
        user_type: "Customer"
      });
    }

    onSubmit(form: FormGroup) {
      console.log('Name', form.value.name);
      console.log('Email', form.value.email);
      axios.post('http://localhost:8080/validateUser', form.value)
      .then(response => {
        console.log(response.data);
        if(response.data == ""){
          alert("Yet not Registered !!");
        }
        else{
          alert("Login Successful !");
          console.log("Login success");
          this.goToDash();
        }
      })
    }
}