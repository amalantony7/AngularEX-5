import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators, FormBuilder, NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public emailRegex = "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";
  loginForm : FormGroup;

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }
  constructor(private fb : FormBuilder, private _auth : AuthService, private _router : Router) { }

  ngOnInit() {

    this.loginForm = this.fb.group({
      email : ['',[Validators.pattern,Validators.required]],
      password : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]]
    });
  }

  onLogin(myForm : NgForm){
    this._auth.loginUser(this.loginForm.value)
                        .subscribe(
                          res => {
                            sessionStorage.setItem('token', res.token);
                            alert("Welcome...");
                            myForm.reset();
                            this._router.navigate(["/special"]);
                          },
                          error => {console.log(error)
                          alert("Login Failed!");}
                        );
  }

}
