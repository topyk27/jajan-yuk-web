import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent {
  fb = this.formBuilder.group({
    email: '',
    password: '',
    username: ''
  });
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  onSubmit() {
    console.log('submit');
  }
  signIn() {
    this.router.navigate(['welcome/sign-in']);
  }
}
