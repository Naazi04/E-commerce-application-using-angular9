import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { passwordMatchValidator } from 'src/app/password-match.directive';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  
  constructor(private fb:FormBuilder) { 
    this.registerForm = this.fb.group({
      fullName: ['',[Validators.required, Validators.pattern(/^[a-zA-Z]+(?:[a-zA-Z]+)*$/)]],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required, Validators.minLength(6)]],
      confirmPassword: ['',[Validators.required, Validators.minLength(6)]]
    }, {
      validators: passwordMatchValidator
    });
  }

  get fullName(){
    return this.registerForm.controls['fullName'];
  }
  get email(){
    return this.registerForm.controls['email'];
  }
  get password(){
    return this.registerForm.controls['password'];
  }
  get confirmPassword(){
    return this.registerForm.controls['confirmPassword'];
  }
  onSubmit(){
    if(this.registerForm.valid){
      console.log("Form submitted successfully",this.registerForm.value);
    }
    else{
      console.log("Form is invalid",this.registerForm.errors);
    }
  

  }

  ngOnInit(): void {
  }

}
