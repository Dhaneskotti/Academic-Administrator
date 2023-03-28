import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentViewComponent } from './student-view/student-view.component';

const routes: Routes = [
  {path:'',component:StudentListComponent},
  {path:'stud-list',component:StudentListComponent},
  {path:'stud-view',component:StudentViewComponent},
  {path:'stud-add',component:StudentAddComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
