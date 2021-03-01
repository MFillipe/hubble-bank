import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { CreateAccountService } from 'src/app/shared/components/create-account/create-account.service';
import User from 'src/app/shared/interfaces/user.interfaces';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  isLoading: boolean;

  userForm: FormGroup;

  user: User;
  
  constructor(
    private createAccountService:  CreateAccountService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      cpf: ['', Validators.required],
      id: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required],
      temporaryPassword: ['', Validators.required],
    })
  }

  fielValidation() {
    Object.keys(this.userForm.controls).forEach(field => {
      const control = this.userForm.get(field);
      control.markAsTouched();
    })
  }

  submitUser() {
    this.isLoading = true;

    if (this.userForm.invalid) {
      this.fielValidation();
      this.isLoading = false;
      return;
    }
    this.createNewUser();
  }

  createNewUser() {

    this.isLoading = true;

    const user = {
      "id": this.userForm.value.id,
      "name": this.userForm.value.name,
      "cpf": this.userForm.value.cpf,
      "password": this.userForm.value.password,
      "temporaryPassword": this.userForm.value.temporaryPassword,  
    }
    
    this.createAccountService.createUser(user)
    .pipe(
      finalize(() => this.isLoading = false)
    )
    .subscribe(
      response => this.onSuccess(),
      error => this.onError(error)
    )
  }
      
  onSuccess() {
    this.router.navigate(['/login']);
  }

  onError(error) {
    console.error(error);
  }

  showError(session: string) {
    if (!this.userForm.get(session)) {
      return false;
    }
    
    return this.userForm.get(session).invalid && this.userForm.get(session).touched;
  }

}
