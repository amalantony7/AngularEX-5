import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public events = [];

  constructor(private _authService : AuthService) { }

  ngOnInit() {

    this._authService.getEmployeeDetails()
       .subscribe(
         res => this.events = res,
         err => console.log(err)
       )

  }

  @Output() public childEvent = new EventEmitter();

  sendData(){
    this.childEvent.emit(this.events);
  }
}
