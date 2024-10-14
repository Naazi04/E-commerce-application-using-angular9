import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { error } from 'console';
// import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(6)]]
  });

  constructor(
    private fb: FormBuilder
  ) {}
  onSubmit(){
    if(this.loginForm.valid){
      console.log('Login Successful',this.loginForm.value);
    }
  }

  //  loginUser(){
  //   const {email, password} = this.loginForm.value;
  //   this.authService.getUserByEmail(email as string).subscribe(
  //     res =>{
  //       if(res.length > 0 && res[0].password === password){
  //         sessionStorage.setItem('email', email as string);
  //         this.router.navigate(['/home']);
  //       }
  //     }
  //   )
  //  }

  ngOnInit(): void {
  }

}
