import { Component, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'student-management';
 
  constructor(){

  }

  ngOnInit(): void {
      
  }
  
  // ngAfterViewInit(){
  //   const node = document.createElement('script');
  //   node.src= "../assets/PreTheme/js/script.js";
  //   node.type="text/javascript";
  //   node.async = false;
  //   document.getElementsByTagName('body')[0].appendChild(node)
  // }
}
