import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  public empDetails = [];
  isShow = false;
  

  constructor( private _authSer : AuthService , private _snackBar : MatSnackBar , private _router : Router) { }

  ngOnInit() {
  }



  deleteEmp(emp : any){
    this._authSer.deleteEmployee(emp.email)
                  .subscribe(
                    res => {
                      this._router.navigate(['/special']);
                      console.log("Employee Deleted!");
                      this._snackBar.open("Employee Deleted SuccessFully!", '' , {duration : 2000});
                      
                    },
                    error => {
                      this._snackBar.open("Employee can't be Deleted!", '' , {duration : 2000});
                      console.log("Error! " + error);
                    }
                  )
  }

  updateEmployee(emp : any){
    this.isShow = !this.isShow;
  }

}
