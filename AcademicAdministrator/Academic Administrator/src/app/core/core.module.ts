import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarTwoComponent } from './navbar-two/navbar-two.component';
import { CoreComponent } from './core/core.component';
import { CoreRoutingModule } from './core-routing.module';


@NgModule({
  declarations: [
    SidebarComponent,
    NavbarTwoComponent,
    CoreComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
  ],
  exports: [
    SidebarComponent,
    NavbarTwoComponent,
    CoreComponent
  ]
})
export class CoreModule { }
