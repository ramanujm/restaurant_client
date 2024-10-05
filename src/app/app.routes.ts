import { Routes } from '@angular/router';
import { UserSignupComponent } from './pages/user-signup/user-signup.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: 'signup',
    pathMatch:"full"
  },
  {
    path:"signup",
    component: UserSignupComponent
  },
  {
    path: 'login',
    component: UserLoginComponent
  }

];
