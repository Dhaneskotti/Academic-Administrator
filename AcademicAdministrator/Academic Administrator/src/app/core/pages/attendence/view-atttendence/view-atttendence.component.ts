import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {ThemePalette} from '@angular/material/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-view-atttendence',
  templateUrl: './view-atttendence.component.html',
  styleUrls: ['./view-atttendence.component.scss']
})
export class ViewAtttendenceComponent implements OnInit {

  constructor() { }
  filter:Boolean=false;

  a:any = new Date().getDate();
  b:any = new Date().getMonth() +1;
  c:any = new Date().getFullYear();

  currentdata:any = this.a+'/'+this.b+'/'+this.c

  event:any=this.currentdata;


  ngOnInit(): void {
  }

  getDate(event:MatDatepickerInputEvent<Date>){
    const date = event.value?.getDate();
    const month = event.value?.getMonth()?(event.value?.getMonth()+1):null;
    const year = event.value?.getFullYear();
    const fullDMY = date+'/'+month+'/'+year;
    this.event = fullDMY   
    console.log();
    
    // this.event.push({'data':event.value.})
  }

  Dept: dept[] = [
    {dept: 'B.com.Gendral',},
    {dept: 'B.com.CS',},
    {dept: 'BSC.Cs',},
    {dept: 'BCA',},
    {dept: 'BSC.Crim',},
    {dept: 'B.com.Gendral',},
    {dept: 'B.com.CS',},
    {dept: 'BSC.Cs',},
    {dept: 'BCA',},
    {dept: 'BSC.Crim',},
    {dept: 'B.com.Gendral',},
    {dept: 'B.com.CS',},
    {dept: 'BSC.Cs',},
    {dept: 'BCA',},
    {dept: 'BSC.Crim',},
    {dept: 'B.com.Gendral',},
    {dept: 'B.com.CS',},
  ];
  
  Year:year[]=[
    {year:'First-Year'},
    {year:'Seconnd-year'},
    {year:'Third-Year'},
  ]

}

interface dept {
  dept: string;
}
interface year {
  year: string;
}
