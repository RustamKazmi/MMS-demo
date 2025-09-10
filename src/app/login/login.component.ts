import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgIf, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;
  errorMessage = '';

  // Static credentials
  private validEmail = 'test@example.com';
  private validPassword = '123456';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    if (email === this.validEmail && password === this.validPassword) {
      // localStorage.setItem('loggedInEmail', email);
      this.authService.setEmail(email); // Push to state
      this.errorMessage = '';
      this.errorMessage = '';
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'Welcome back!',
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        this.router.navigate(['/dashboard']);
      });
    } else {
      this.errorMessage = 'Invalid email or password';
      Swal.fire({
        icon: 'error',
        title: 'Login Error',
        text: 'Invalid email or password',
        timer: 2000,
        showConfirmButton: false,
      });
    }
  }
}
