import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../lib/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  fb = this.formBuilder.group({
    email: '',
    password: '',
  });
  constructor(private formBuilder: FormBuilder, private router: Router, private appwrite: UserService) {}

  onSubmit() {
    // console.log('sbumit');
    this.router.navigate(['main'])
    // console.log(this.fb.value);
    // this.appwrite.signIn(this.fb.value).then((res) => {
    //   console.log('res');
    //   console.log(res);
    // },(reject) => {
    //   console.log('reject');
    //   console.log(reject);
    // })

  }
  signUp() {
    this.router.navigate(['welcome/sign-up']);
  }
}
