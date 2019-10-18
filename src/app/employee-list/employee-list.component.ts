import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public events = [];
  public empDetails = [];

  constructor(private _authService : AuthService , private _router : Router ) { }

  ngOnInit() {

    this._authService.getEmployeeDetails()
       .subscribe(
         res => this.events = res,
         err => console.log(err)
       )

  }

  @Output() public childEvent = new EventEmitter();

  sendData(){
    
  }

  searchEmploye(empDet){

    this._authService.searchEmployee(empDet.email)
                        .subscribe(
                            res => {
                              this.empDetails = res
                              console.log(this.empDetails);
                              this.childEvent.emit(this.empDetails);
                            },
                          error => console.log("Error!" + error)
                        )

  }

}
