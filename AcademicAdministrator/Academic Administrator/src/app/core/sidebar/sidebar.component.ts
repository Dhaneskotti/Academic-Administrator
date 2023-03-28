import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements  AfterViewInit{


  

  ngAfterViewInit(){
    const node = document.createElement('script');
    node.src= "../assets/PreTheme/js/script.js";
    node.type="text/javascript";
    node.async = false;
    document.getElementsByTagName('body')[0].appendChild(node)
  }

 dash:boolean = true;
 stud:boolean = false;
 teach:boolean = false;
 dept:boolean = false;
 subj:boolean = false;
 attd:boolean = false;
 event:boolean = false;

 onDash(){
 this.dash=true;
 this.stud = false;
 this.teach = false;
 this.dept = false;
 this.subj = false;
 this.attd = false;
 this.event = false
 }
 onStud(){
  this.dash=false;
  this.stud = true;
   this.teach = false;
   this.dept = false;
   this.subj = false;
   this.attd = false;
   this.event = false
}
 onTeach(){
  this.dash=false;
  this.stud = false;
   this.teach = true;
   this.dept = false;
   this.subj = false;
   this.attd = false;
   this.event = false

}
 onDept(){
  this.dash=false;
  this.stud = false;
   this.teach = false;
   this.dept = true;
   this.subj = false;
   this.attd = false
   this.event = false

}
 onSubj(){
  this.dash=false;
  this.stud = false;
   this.teach = false;
   this.dept = false;
   this.subj = true;
   this.attd = false;
   this.event = false

}
 onAttd(){
  this.dash=false;
  this.stud = false;
   this.teach = false;
   this.dept = false;
   this.subj = false;
   this.event = false
   this.attd = true

}
 onEvent(){
  this.dash=false;
  this.stud = false;
   this.teach = false;
   this.dept = false;
   this.subj = true;
   this.attd = false
   this.event = true

 }
}
