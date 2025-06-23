import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedTranslationModule } from '../../layouts/SharedTranslation.module';
@Component({
  selector: 'prm-register',
  imports: [CommonModule,FormsModule,ReactiveFormsModule,SharedTranslationModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
 constructor(private _route: Router) {}
  registerForm: FormGroup = new FormGroup({
    firstname: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10),
    ]),
    lastname: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10),
    ]),
    username: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
      Validators.pattern(/^[0-9]{3,5}[a-zA-z]{3,5}$/),
    ]),
  });
  submitregisterForm(form: FormGroup) {
    console.log(form);
  }
  onToggleshowpassword(): void {
    let inputPass = document.getElementById(
      'inputPassword4'
    ) as HTMLInputElement;
    let eyeToggleIcon = document.getElementById(
      'toggle-slash'
    ) as HTMLSpanElement;

    if (inputPass.type === 'password') {
      inputPass.type = 'text';
      eyeToggleIcon.classList.remove('pi-eye');
      eyeToggleIcon.classList.add('pi-eye-slash');
    } else {
      inputPass.type = 'password';
      eyeToggleIcon.classList.remove('pi-eye-slash');
      eyeToggleIcon.classList.add('pi-eye');
    }
  }
  oninput(): void {
    let showsuccess = document.querySelector('.show-hint-col') as HTMLElement;
    // showsuccess.classList.remove("text-danger");
    showsuccess.classList.add('d-block');
  }
  onLoginSuccess() {
    (document.querySelector('form') as HTMLElement).classList.add('d-none');
    (document.querySelector('.login-done') as HTMLElement).classList.remove(
      'd-none'
    );
    (document.querySelector('.login-done') as HTMLElement).classList.add(
      'd-block'
    );
    console.log('submitted !');
    sessionStorage.setItem('authorized', 'true');


  }
  stopOnLoginSuccess() {
    (document.querySelector('.login-done') as HTMLElement).classList.remove(
      'd-block'
    );
    (document.querySelector('.login-done') as HTMLElement).classList.add(
      'd-none'
    );
    
    this._route.navigate(['/home']);
    (document.getElementById('login')as HTMLAnchorElement).classList.toggle("d-none");
  }
  messageSuccess: boolean = false;

  showMessageSuccess() {
    this.messageSuccess = true;
    if ((this.messageSuccess = true)) {
      this.onLoginSuccess();
    }
    setTimeout(() => {
      // <<<---using ()=> syntax
      this.messageSuccess = false;
      this.stopOnLoginSuccess();
    }, 6000);
  }
  goback(){
    this._route.navigate(['/login']);
  }
}
