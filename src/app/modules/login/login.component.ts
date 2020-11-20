import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username:string='';
  public password:string='';
  constructor(private router: Router,) { }
  
  ngOnInit(): void {
  }
  LoginUser(){
    if (this.username=='admin'&& this.password=='admin123'){
      this.router.navigateByUrl('admin/dashboard')
      // alert("You are successfully logged in")
    }else{
        alert("Invalid Credentials")
    }
  }

}
