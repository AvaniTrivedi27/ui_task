import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { ProductComponent } from './app/product/product.component';
import { RegisterComponent } from './app/register/register.component';

const routes: Routes = [
    
  {path:"login",component:LoginComponent},
  {path:"registartion",component:RegisterComponent},
  {path:"product",component:ProductComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
