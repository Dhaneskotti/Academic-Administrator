import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ForgotpassComponent } from './forgotpass/forgotpass.component';
import { ResetpassComponent } from './resetpass/resetpass.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { StudentViewService } from '../core/pages/student-view/student-view.service';




@NgModule({
  declarations: [
    UserloginComponent,
    ForgotpassComponent,
    ResetpassComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    AuthService,
    StudentViewService
  ]
})
export class AuthModule { }
