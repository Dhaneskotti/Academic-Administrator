import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { BtnOneComponent } from './btn-one/btn-one.component';
import { BtnTwoComponent } from './btn-two/btn-two.component';
import { FormCreationComponent } from './form-creation/form-creation.component';
import {ModalComponent} from './modal/modal.component'


@NgModule({
  declarations: [
    NavbarComponent,
    BtnOneComponent,
    BtnTwoComponent,
    FormCreationComponent,
    ModalComponent
    
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    NavbarComponent,
    BtnOneComponent,
    BtnTwoComponent,
    FormCreationComponent,
    ModalComponent
  ]
})
export class SharedModule { }
