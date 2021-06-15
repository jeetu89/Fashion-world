import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angularx-social-login";
import { Router } from '@angular/router';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { FinalService } from 'src/app/services/final.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userData
myForm:FormGroup
  resData
  errMsg
  constructor(private authService: AuthService,private router:Router,private fb: FormBuilder,private fser: FinalService) { }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  } 

  ngOnInit() {
    this.validate()
    this.authService.authState.subscribe((user) => {
      
      this.userData = user;
      console.log(this.userData);
      // this.loggedIn = (user != null);
    });
  }
  postData()
  {
    let fdata=this.myForm.getRawValue();
    // alert("Login successfully")
    console.log(fdata)
    this.fser.loginAdmin(fdata)

    .subscribe(res=>
     {
       this.resData=res;
      
       if(this.resData.err==0)
       {
         localStorage.setItem('sid',this.resData.uid);
          this.router.navigate(['/'])
       }
       if(this.resData.err==1)
       {
         this.errMsg=this.resData.msg;
       }
      },err=>
      {
        console.log(err);
      })
      

  }


  validate()
  {

    
    this.myForm=this.fb.group(
      {
        'email':['',[Validators.required, Validators.pattern("[a-zA-Z0-9_.@]+")]],
        'pass':['',[Validators.required,]],
        
      }
    )
  }


}
