import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {

  private special =[];

  constructor(private _specialEvents : EventService, private _router : Router) { }

  ngOnInit() {

    this._specialEvents.getspecials()
       .subscribe(
         res => this.special = res,
         err => {
           if(err instanceof HttpErrorResponse){
             if(err.status === 401){
                this._router.navigate(["/login"]);
             }
           }
         }
       )  
  }

}
