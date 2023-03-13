import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { RegisterComponent } from '../register/register.component';
import { MatDialog } from '@angular/material/dialog';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})

export class LoginBoxComponent
{
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

  matcher = new MyErrorStateMatcher();
  constructor(public dialog: MatDialog) { }
  openRegisterDialog() {
    const dialogRef = this.dialog.open(RegisterComponent, {
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle dialog result if needed
    });
  }
}


