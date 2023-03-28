import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-creation',
  templateUrl: './form-creation.component.html',
  styleUrls: ['./form-creation.component.scss']
})
export class FormCreationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  x:any = 'admin';
  isShownStud: boolean = false ; // hidden by default
  isShownAdmin: boolean = true ; 
  
  adminbtn:boolean = true;
  studbtn:boolean = false;
  admin(){
    this.adminbtn = true;
    this.studbtn = false;
  }
  stud(){
    this.adminbtn = false;
    this.studbtn = true;
  }
  // toggleShow() {
    
// this.isShown = ! this.isShown;
// this.x=='admin'?this.x='student':this.x='admin';

// }
toggleShowstudent() {
  
  this.isShownStud = true;
  this.isShownAdmin= false;
  this.x='student';
  }

toggleShowadmin() {
  
  this.isShownStud = false;
  this.isShownAdmin= true;
  this.x='admin';
}



}
