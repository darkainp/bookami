import { Component } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators, } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css']
})

export class LoginBoxComponent
{
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;

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


