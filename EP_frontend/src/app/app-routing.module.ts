import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  // { path: '', component: LoginComponent }, // Default route (Home)
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
