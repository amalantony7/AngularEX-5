import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth.service'
import { FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { $ } from 'protractor';
 
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

  public minDate = new Date("01/01/1990");
  public maxDate = new Date();

  options: string[] = ['Account Head', 'Agent',  'Department Head', 'HR', 'Manager' , 'Mechanic',  'Receptionist', 'Staff' ];

  imageChangedEvent: any = '';
  croppedImage: any = '';

  constructor(private _auth : AuthService,
              private fb : FormBuilder,
              private  _router : Router,
              private _snackBar : MatSnackBar) { }

  get userName(){
    return this.registerForm.get('username');
  }

  get proPic(){
    return this.registerForm.get('proPic');
  }
  get address(){
    return this.registerForm.get('address');
  }
  get dob(){
    return this.registerForm.get('dob');
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
  get empDep(){
    return this.registerForm.get('empDep');
  }
  get phone(){
    return this.registerForm.get('phone');
  }


  // For image cropping using ngx-image-cropper
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    console.log(this.croppedImage);
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    this._snackBar.open(`wrong filetype selected (only png, gif and jpg are allowed)`, '' , { duration : 2000});
  }

  closeCropper(){
    this.fileChangeEvent("destroy");
  }


  ngOnInit() {

    this.registerForm = this.fb.group({
      username : ['',[Validators.pattern,Validators.required,Validators.minLength(2),Validators.maxLength(20)]],
      proPic : ['', [Validators.required]],
      address : ['',[Validators.required,Validators.minLength(10),Validators.maxLength(50)]],
      dob : ['',[Validators.required]],
      place : ['',[Validators.required,Validators.pattern]],
      email : ['',[Validators.required,Validators.pattern(this.emailRegex),Validators.maxLength(25),Validators.minLength(6)]],
      password : ['',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
      empDep : ['',[Validators.required]],
      phone : ['',[Validators.required,Validators.pattern,Validators.maxLength(10)]]
    });
    
  }

  onRegister(myForm : NgForm){
    const data = this.registerForm.value;
    data.image=this.croppedImage; //to add value of an element from outside form.
    this._auth.registerData(data)
                        .subscribe(
                          res => {
                            localStorage.setItem('token', res.token);
                            this._snackBar.open("Registration Sccessfull!" ,'Dismiss', {duration : 2000});
                            myForm.reset();
                            this._router.navigate(["/events"]);
                          },
                          error => {
                            console.log(error);
                            this._snackBar.open("Registration UnSccessfull!" ,'', {duration : 2000});
                          }
                        );
  }

}
