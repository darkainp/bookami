import { User } from '../models/user.model';
import { UserService } from '../services/user.service';


import { Component, ViewEncapsulation } from '@angular/core';
import {
  FormControl, MaxLengthValidator, Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {
  lname!: string;
  fname!: string;
  nameRegex: RegExp = /[a-zA-Z ]*/;
  passRegex: RegExp = /^(?=.*[!@#$%^&*()\-_=+{};:,<.>/?])(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,30}$/;
  emaiL!: string;
  email = new FormControl('', [Validators.required, Validators.email]);
  password1!: string;
  password2!: string;
  matched!: boolean;
  password = new FormControl(
    '', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(30),
      Validators.pattern(this.passRegex)
  ]
  );

  isTooLong!: boolean;
  isTooShort!: boolean;
  oneLower!: boolean;
  oneUpper!: boolean;
  oneSpecial!: boolean;
  oneDigit!: boolean;
  showErrors!: boolean;

  isCreatable = false;
  hide = true;

  showRegisterForm = false;

  

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.email.valueChanges.subscribe(value => {
      this.emaiL = value!;
    });
    this.password.valueChanges.subscribe(value => {
      this.password1 = value!;
    })
    
  }


  toggleRegisterForm() {
    this.showRegisterForm = !this.showRegisterForm;
  }

  onCreateNewAccount() {
    //Register new account code
    let user: User = new User(this.fname, this.lname, this.emaiL, this.password1);

    this.userService.register(user).subscribe(
      response => console.log('Registration successful'),
      error => console.log('Registration failed', error)
    );
  }


  onUpdateForm(): boolean {
    this.isCreatable = false;
    if (this.email.valid
      && this.nameRegex.test(this.lname)
      && this.nameRegex.test(this.fname)
      && this.passRegex.test(this.password1)
      && !this.isTooShort
      && !this.isTooLong
      && this.passwordsMatch()) {
        this.isCreatable = true;
    }
    return this.isCreatable;
  }

  passwordsMatch(): boolean {
    this.matched = false;
    if (this.password1 === this.password2)
      this.matched = true;
    return this.matched;
  }

  onInputUpdate() {
    if (/[A-Z]/.test(this.password.value!))
      this.oneUpper = true;
    else this.oneUpper = false;
    if (/[a-z]/.test(this.password.value!))
      this.oneLower = true;
    else this.oneLower = false;

    if (/[0-9]/.test(this.password.value!))
      this.oneDigit = true;
    else this.oneDigit = false;

    if (/.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].*/.test(this.password.value!))
      this.oneSpecial = true;
    else this.oneSpecial = false;

    if (this.password.hasError('maxlength'))
      this.isTooLong = true;
    else this.isTooLong = false;

    if (this.password.hasError('minlength'))
      this.isTooShort = true;
    else this.isTooShort = false;

    this.showErrors = false;
    // check for errors
    if (!this.password1
      && this.password.hasError('maxlength')
    ) {
      this.showErrors = true;
    } else if (this.password.hasError('maxlength')) {
      this.showErrors = true;
    } else if (this.password.hasError('minlength')) {
      this.showErrors = true;
    } else if (!this.oneUpper) {
      this.showErrors = true;
    } else if (!this.oneLower)
      this.showErrors = true;
    else if (!this.oneSpecial)
      this.showErrors = true;
    else if (!this.oneDigit)
      this.showErrors = true;
  }
}


