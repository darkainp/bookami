import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './header/header.component';
import { LoginBoxComponent } from './login-box/login-box.component';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { LogoComponent } from './logo/logo.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs'; 
import { MatInputModule } from '@angular/material/input';
import { LibraryComponent } from './library/library.component';
import { MyBookselfComponent } from './my-bookself/my-bookself.component';
import { CreateComponent } from './create/create.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegisterComponent } from './register/register.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginBoxComponent,
    LogoComponent,
    LibraryComponent,
    MyBookselfComponent,
    CreateComponent,
    NavBarComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatInputModule,
    MatDialogModule,

  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { floatLabel: 'always' } },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

