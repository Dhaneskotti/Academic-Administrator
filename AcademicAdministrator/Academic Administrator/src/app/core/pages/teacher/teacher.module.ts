import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherViewComponent } from './teacher-view/teacher-view.component';
import { TeacherAddComponent } from './teacher-add/teacher-add.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TechDataService } from './tech-data.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    TeacherListComponent,
    TeacherViewComponent,
    TeacherAddComponent,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatRadioModule,
    MatFormFieldModule,
    SharedModule,
    NgApexchartsModule
  ],
  providers: [
    TechDataService,

  ]
})
export class TeacherModule { }
