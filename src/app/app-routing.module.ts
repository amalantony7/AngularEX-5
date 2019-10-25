import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent} from  './events/events.component';
import { SpecialComponent } from './special/special.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { CarsComponent } from './cars/cars.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { TableEmpComponent } from './table-emp/table-emp.component';



const routes: Routes = [
  {path : "" , redirectTo: "/events" , pathMatch : "full"},
  {path : "login" , component : LoginComponent},
  {path : "register" , component : RegisterComponent},
  {path : "events" , component : EventsComponent},
  {path : "cars", component : CarsComponent},
  {path : "employee" , component : EmployeeDetailsComponent},
  {path : "employee/:email", component : EmployeeDetailsComponent},
  {path : "special" , component : SpecialComponent, canActivate : [AuthGuard]},
  {path : "table" , component : TableEmpComponent},
  {path : "**" , component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
