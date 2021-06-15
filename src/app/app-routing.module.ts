import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { CategorycomponentComponent } from './pages/categorycomponent/categorycomponent.component';
import { CartComponent } from './pages/cart/cart.component';
import { SearchComponent } from './pages/search/search.component';
import { ProductdetailsComponent } from './pages/productdetails/productdetails.component';


const routes: Routes = [
  {path:'',component:MainComponent},
  {path:'category/:cname',component:CategorycomponentComponent},
  {path:'contact-us',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'cart',component:CartComponent},
  {path:'search/:ser',component:SearchComponent},
  {path:'product-details/:pid',component:ProductdetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
