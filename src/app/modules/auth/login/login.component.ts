import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/shared/services/auth.service';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private authService: AuthService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router
  ) {}

  loginForm: FormGroup;

  isLoading: boolean;

  isError: boolean;

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      user: ['', [Validators.required, Validators.minLength(3)]],
      cpf: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.validateAllFormFields();

      return;
    }

    this.login();
  }

  validateAllFormFields() {
    Object.keys(this.loginForm.controls).forEach((field) =>
      this.loginForm.get(field).markAllAsTouched()
    );
  }

  showError(elementName: string) {
    if (!this.loginForm.get(elementName)) return false;
    return (
      this.loginForm.get(elementName)?.invalid &&
      this.loginForm.get(elementName).touched
    );
  }

  login() {
    const { user, password } = this.loginForm.value;
    this.loginService.execute(user, password).subscribe(
      (response) => {
        this.authService.setUser({
          login: response.usuario.login,
          name: response.usuario.nome,
          token: response.token,
          accountId: response.conta.id,
          creditAccountId: response.contaCredito.id,
        });

        this.router.navigate(['dashboard']);
        this.toastr.success('Success', 'Successfully logged in!');
      },
      (error) => this.toastr.error('Error', error)
    );
  }
}
