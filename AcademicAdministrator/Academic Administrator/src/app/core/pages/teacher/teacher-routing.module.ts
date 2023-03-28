import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherAddComponent } from './teacher-add/teacher-add.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherViewComponent } from './teacher-view/teacher-view.component';

const routes: Routes = [
  {path:'',component:TeacherListComponent},
  {path:'teach-list',component:TeacherListComponent},
  {path:'teach-view',component:TeacherViewComponent},
  {path:'teach-add',component:TeacherAddComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
