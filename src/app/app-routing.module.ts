import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent} from  './events/events.component';
import { SpecialComponent } from './special/special.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';



const routes: Routes = [
  {path : "" , redirectTo: "/events" , pathMatch : "full"},
  {path : "login" , component : LoginComponent},
  {path : "register" , component : RegisterComponent},
  {path : "events" , component : EventsComponent},
  {path : "special" , component : SpecialComponent, canActivate : [AuthGuard]},
  {path : "**" , component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
