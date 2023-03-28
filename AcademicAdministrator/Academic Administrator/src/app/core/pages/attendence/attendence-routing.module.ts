import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TakeAttendenceComponent } from './take-attendence/take-attendence.component';
import { ViewAtttendenceComponent } from './view-atttendence/view-atttendence.component';

const routes: Routes = [
  {path:'',component:TakeAttendenceComponent},
  {path:'take-atte',component:TakeAttendenceComponent},
  {path:'view-atte',component:ViewAtttendenceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendenceRoutingModule { }
