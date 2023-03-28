import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DeptServiceService } from './dept-service.service';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    DepartmentListComponent,
    DepartmentAddComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    MatRadioModule,
    MatFormFieldModule,
    SharedModule
  ],
  providers:[
    DeptServiceService
  ]
})
export class DepartmentModule { }
