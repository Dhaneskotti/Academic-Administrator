import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "auth", loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule) },
  { path: "page", loadChildren: () => import('./core/core.module').then((m) => m.CoreModule) },
  { path: 'studentportal', loadChildren: () => import('./core/pages/student-view/student-view.module').then((m) => m.StudentViewModule) },
  // { path: "", redirectTo: "/page/dashboard/admin", pathMatch: "full" },
  { path: "", redirectTo: "/auth/userlogin", pathMatch: "full" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
