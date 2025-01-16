
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NotfoundComponent } from './notfound/notfound.component';


export const routes: Routes = [
  {path:"",redirectTo:'home' , pathMatch:'full' , title:"home"},
  {path:"home",component:HomeComponent,title:"home"},
  {path:"about",component:AboutComponent,title:"about"},
  {path:"contact",component:ContactComponent , title:"contact"},
  {path:"portfolio" , component:PortfolioComponent,title:"portfolio"},
  {path:"**", component:NotfoundComponent,title:"notfound"}

]
