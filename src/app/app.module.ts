import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule} from '@angular/common/http';
import { AuthService} from './auth.service';
import { EventService} from './event.service';
import { HTTP_INTERCEPTORS} from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service';
import { ImageCropperModule} from 'ngx-image-cropper';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { RegisterComponent } from './register/register.component';
import { SpecialComponent } from './special/special.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth.guard';
import { CarsComponent } from './cars/cars.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EventsComponent,
    RegisterComponent,
    SpecialComponent,
    PageNotFoundComponent,
    CarsComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    ViewEmployeeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ImageCropperModule
  ],
  providers: [AuthService, AuthGuard, EventService, {
    provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptorService,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
