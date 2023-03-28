import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './core/core.component';

const routes: Routes = [
  {path:'',component:CoreComponent,children:[
  {path:"dashboard",loadChildren: ()=>import('./pages/dashboard/dashboard.module').then(m=>m.DashboardModule)},
  {path:"student",loadChildren: ()=>import('./pages/student/student.module').then(m=>m.StudentModule)},
  {path:'teacher',loadChildren: ()=>import('./pages/teacher/teacher.module').then(m=>m.TeacherModule)},
  {path:'department',loadChildren: ()=>import('./pages/department/department.module').then(m=>m.DepartmentModule)},
  {path:'attendence',loadChildren:()=>import('./pages/attendence/attendence.module').then(m=>m.AttendenceModule)},
  {path:'event',loadChildren: ()=>import('./pages/event/event.module').then(m=>m.EventModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }