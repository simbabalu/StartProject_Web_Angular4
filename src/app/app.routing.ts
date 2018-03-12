import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactComponent } from "./contact/contact.component";


const APP_ROUTES:Routes =[
    {path:'', redirectTo:'/home', pathMatch:'full'},
    {path:'',component:HomeComponent },
    {path:'home', component:HomeComponent},
    {path:'about-us', component:AboutUsComponent},
    {path:'contact', component:ContactComponent},
] 

export const appRouting = RouterModule.forRoot(APP_ROUTES);