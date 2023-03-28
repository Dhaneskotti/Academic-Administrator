import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from '../core/core/core.component';
import { AdminComponent } from '../core/pages/dashboard/admin/admin.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [
  { path: 'userlogin', component: UserloginComponent },
  { path: 'core', redirectTo: '/page/dashboard/admin', pathMatch: "full" },
  { path: 'std', redirectTo: '/studentportal/view', pathMatch: "full" },
  { path: 'teach', redirectTo: '/page/teacher/teach-view', pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
