import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentViewRoutingModule } from './student-view-routing.module';
import { StudentViewComponent } from './student-view/student-view.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentViewService } from './student-view.service';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { MbscModule } from '@mobiscroll/angular';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../../../shared/shared.module'
import { AuthService } from 'src/app/auth/auth.service';


@NgModule({
  declarations: [
    StudentViewComponent
  ],
  imports: [
    CommonModule,
    StudentViewRoutingModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MbscModule,
    MatRadioModule,
    MatFormFieldModule,
    NgApexchartsModule,
    MatDialogModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    SharedModule
  ],
  providers: [
    StudentViewService,
    AuthService
  ]
})
export class StudentViewModule { }
