import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { catchError} from 'rxjs/operators'
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _eventUrl = "http://localhost:3000/api/userdata";
  private _specialUrl = "http://localhost:3000/api/special";

  constructor(private _http : HttpClient) { }


  getEvents(){
    return this._http.get<any>(this._eventUrl)
              .pipe(catchError(this.errorHandler));
  }

  getspecials(){
    return this._http.get<any>(this._specialUrl)
              .pipe(catchError(this.errorHandler));
  }

  errorHandler(error : HttpErrorResponse){
    return throwError(error.message || "Service Error!");
  }
}
