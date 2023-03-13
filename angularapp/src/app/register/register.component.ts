import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  password1!: string;
  password2!: string;
  matcher = new MyErrorStateMatcher();


  showRegisterForm = false;

  toggleRegisterForm() {
    this.showRegisterForm = !this.showRegisterForm;
  }

  passwordsMatch(): boolean {
    return this.password1 === this.password2;
  }
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


