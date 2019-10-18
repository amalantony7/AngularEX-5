import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import { throwError} from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _regUrl = "http://localhost:3000/api/register";
  private _logUrl = "http://localhost:3000/api/login";
  private _getEmpUrl= "http://localhost:3000/api/employees";
  private _srchEmp = "http://localhost:3000/api/employee";
  constructor(private _http : HttpClient, private _router : Router) { }

  registerData(user){
    return this._http.post<any>(this._regUrl,user)
                    .pipe(catchError(this.errorHandler));
  }

  loginUser(user){
    return this._http.post<any>(this._logUrl,user)
                      .pipe(catchError(this.errorHandler));
  }

  getEmployeeDetails(){
    return this._http.get<any>(this._getEmpUrl)
                      .pipe(catchError(this.errorHandler));
  }

  searchEmployee(email:string){
    const params = new HttpParams().set('email',email) //set http params for retriving data based on query
    return this._http.get<any>(this._srchEmp,{params : params})
                      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error : HttpErrorResponse){
    return throwError(error.message || "Service Error!");
  }

  loggedIn(){
    return !!sessionStorage.getItem('token');
  }
  getToken(){
    return sessionStorage.getItem('token');
  }
  logOutUser(){
    sessionStorage.removeItem('token');
    alert("You have Successfully LoggedOut!")
    this._router.navigate(["/events"]);
  }


}
