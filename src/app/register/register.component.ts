import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service'
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;
  public phoneRegex = "^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$";
  public emailRegex = "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$";
  public nameRegex = "^[a-zA-Z \s]+$";

  constructor(private _auth : AuthService, private fb : FormBuilder, private  _router : Router) { }

  get userName(){
    return this.registerForm.get('username');
  }
  get place(){
    return this.registerForm.get('place');
  }
  get email(){
    return this.registerForm.get('email');
  }
  get password(){
    return this.registerForm.get('password');
  }
  get phone(){
    return this.registerForm.get('phone');
  }


  ngOnInit() {

    this.registerForm = this.fb.group({
      username : ['',[Validators.pattern,Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
      place : ['',[Validators.required,Validators.pattern]],
      email : ['',[Validators.pattern,Validators.required]],
      password : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
      phone : ['',[Validators.required,Validators.pattern,Validators.maxLength(10)]]
    });
    
  }

  onRegister(myForm : NgForm){
    this._auth.registerData(this.registerForm.value)
                        .subscribe(
                          res => {
                            localStorage.setItem('token', res.token);
                            alert("Registered!");
                            myForm.reset();
                            this._router.navigate(["/events"]);
                          },
                          error => console.log(error)
                        );
  }

}
