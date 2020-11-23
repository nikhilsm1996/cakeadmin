import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // public username:string='';
  // public password:string='';
  constructor(private _login:LoginService,private router: Router,) { }
  loginUserData :any={}
  errors=null
  ngOnInit() {
    
  }
 
  loginUser(){
    this._login.loginUser(this.loginUserData).subscribe(res=> {
      console.log(res)
      localStorage.setItem('token',res.token)
      this.router.navigate(['admin/dashboard'])
     },  
     err=> this.errors=err.error)
    
  }


}
