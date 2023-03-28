import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentAddComponent } from './department-add/department-add.component';
import { DepartmentListComponent } from './department-list/department-list.component';

const routes: Routes = [
  {path:'',component:DepartmentListComponent},
  {path:'dept-list',component:DepartmentListComponent},
  {path:'dept-add',component:DepartmentAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
