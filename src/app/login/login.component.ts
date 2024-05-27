import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string = '';

  private readonly validUsername: string = 'user';
  private readonly validPassword: string = 'user123';

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required]],
    });
  }
  onLogin() {
    console.log(this.loginForm.valid);
    if (!this.loginForm.valid) {
      this.errorMessage = 'Fields required!';
      return;
    }
    if (
      this.loginForm.value.username === this.validUsername &&
      this.loginForm.value.password === this.validPassword
    ) {
      this.router.navigate(['/home']);
      this.errorMessage = 'Login Successful';
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }
}
