import { Component, OnInit } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import {ThemePalette} from '@angular/material/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { isNgTemplate } from '@angular/compiler';


export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-take-attendence',
  templateUrl: './take-attendence.component.html',
  styleUrls: ['./take-attendence.component.scss']
})
export class TakeAttendenceComponent implements OnInit {
  
  constructor() { }
  filter:Boolean=false;

  a:any = new Date().getDate();
  b:any = new Date().getMonth() +1;
  c:any = new Date().getFullYear();

  currentdata:any = this.a+'/'+this.b+'/'+this.c

  event:any=this.currentdata;

  
  displayedColumns: string[] = ['ID','name','dept','period1','period2','period3','period4','period5','Action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  elementData = ELEMENT_DATA
  
  // task: Task = {
  //   name: 'Indeterminate',
  //   completed: false,
  //   color: 'primary',
  //   subtasks: [
    //     {name: 'Primary', completed: false, color: 'primary'},
    //   ]
    // };
    // allComplete: boolean = false;

    // updateAllComplete() {
  //   this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  // }
  
  // someComplete(): boolean {
    //   if (this.task.subtasks == null) {
      //     return false;
      //   }
      //   return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
      // }
      
      // setAll(completed: boolean) {
        //   this.allComplete = completed;
        //   if (this.task.subtasks == null) {
          //     return;
          //   }
          //   this.task.subtasks.forEach(t => t.completed = completed);
          // }
          attendence:string='absent'
          
          att_Data:Array<any>=[];
          name:Array<any>=[];
          atd:Array<any>=[];

          allAttedValue:Array<any>=[]
          
          ngOnInit(): void {
          

            console.log(this.att_Data);
            // console.log(abc);
            
            // console.log(op);
            
            // console.log(abc);
            // console.log(this.allAttedValue);

          
            // ELEMENT_DATA.forEach(res=>{});
            // let atd =this.attendence;
            // let a = this.attendence
            // console.log(this.id);
            // console.log(this.atd);
            
            
          }

          
          rowname:any;
          boxname:any;
          present:boolean = false
          absent:boolean = false
          
          
          updateAllComplete(row:any,event:any,period:any){
            const { checked } = event
            row.periods[period] = checked?'P':'A';
            console.log('ELEMENT_DATA',ELEMENT_DATA)
            // console.log(period);
          
              // if(checked == true){
              //   this.attendence = 'present';
              //   console.log(row.name+' '+this.attendence);
              //   // console.log(this.attendence);                
              // }else if(event.checked == false){
              //   this.attendence = 'absent'
              //   console.log(row.name+' '+this.attendence);
              //   // console.log(this.attendence); 
              // }
             

             this.allAttedValue.push({
              // 'stdid':dd,
              // 'stdname':hh,
              'newatd':this.attendence
             })

              
              // console.log(dd+" "+hh+" "+kk);
              
              // console.log(xyz[0]='present');
              
            //  console.log(dd+"  "+hh+" "+aa);

             

              // console.log(row.name+' '+atted.source.value);

            // this.selection.toggle(row);
            // console.log(this.selection.deselect());

            // if(atted.source.value == 'present'){
            //   this.absent = true;
            //   this.present = false
            // }
            // else if(atted.source.value == 'absent'){
            //   this.present = false
            //   this.absent = true
            // }

            // if(atted.checked==true){
            //   this.present = false
            // }
            // else if(atted.checked==false){
            //   this. = true
            // }

          }


  

  
  showFilter(){
    this.filter = !this.filter
  }
  
  getDate(event:MatDatepickerInputEvent<Date>){
    const date = event.value?.getDate();
    const month = event.value?.getMonth()?(event.value?.getMonth()+1):null;
    const year = event.value?.getFullYear();
    const fullDMY = date+'/'+month+'/'+year;
    this.event = fullDMY   
    console.log(this.event);
    
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



const ELEMENT_DATA: PeriodicElement[] = [
  {std_ID: 222009522, name: 'Abinash', dept: 'B.com.Gendral', gender: 'male',att_dence: 70, dob: '00/00/0000', e_mail: 'abi@gmail.com', mobile: 1234567890,periods:{
    period1:'',
    period2:'',
    period3:'',
    period4:'',
    period5:'',
  }},
  {std_ID: 222009522, name: 'nisha', dept: 'B.com.CS', gender: 'female',att_dence: 70, dob: '00/00/0000', e_mail: 'nisha@gmail.com', mobile: 1234567890,periods:{
    period1:'',
    period2:'',
    period3:'',
    period4:'',
    period5:'',
  }},
  {std_ID: 222009522, name: 'Arun', dept: 'B.sc', gender: 'male',att_dence: 70, dob: '00/00/0000', e_mail: 'arun@gmail.com', mobile: 1234567890,periods:{
    period1:'',
    period2:'',
    period3:'',
    period4:'',
    period5:'',
  }},
  {std_ID: 222009522, name: 'dinesh', dept: 'BCA', gender: 'male',att_dence: 70, dob: '00/00/0000', e_mail: 'arun@gmail.com', mobile: 1234567890,periods:{
    period1:'',
    period2:'',
    period3:'',
    period4:'',
    period5:'',
  }}, 
  {std_ID: 222009522, name: 'priya', dept: 'B.com A&F', gender: 'female',att_dence: 70, dob: '00/00/0000', e_mail: 'priya@gmail.com', mobile: 1234567890,periods:{
    period1:'',
    period2:'',
    period3:'',
    period4:'',
    period5:'',
  }}, 
  {std_ID: 222009522, name: 'deepak', dept: 'B.sc Psy', gender: 'male',att_dence: 70, dob: '00/00/0000', e_mail: 'deepak@gmail.com', mobile: 1234567890,periods:{
    period1:'',
    period2:'',
    period3:'',
    period4:'',
    period5:'',
  }}  
];
export interface PeriodicElement {
  std_ID: number;
  name: string;
  dept: string;
  gender: string;
  att_dence: number;
  dob: string;
  e_mail: string;
  mobile: number;
  periods?:{
    period1: string,
    period2: string,
    period3: string,
    period4: string,
    period5: string,
  };
}
