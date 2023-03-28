import { Component, OnInit } from '@angular/core';
import { DeptServiceService } from '../dept-service.service';
import {ModalService} from '../../../../shared/modal/modal.service'


export interface PeriodicElement {
  dept_Id: number;
  name: string;
  hodName: string;
  studCount: number;
}

interface dept {
  dept: string;
}
interface year {
  year: string;
}
const ELEMENT_DATA: any = [
  {
    deptId: 222009522,
    deptName: 'commerce',
    hodName: 'HOD Name',
    studCount: 250,
  },
  {
    deptId: 222009522,
    deptName: 'computer Science',
    hodName: 'HOD Name',
    studCount: 100,
  },
  {
    deptId: 222009522,
    deptName: 'psychology',
    hodName: 'HOD Name',
    studCount: 50,
  },
  {
    deptId: 222009522,
    deptName: 'micro biology',
    hodName: 'HOD Name',
    studCount: 50,
  },
  {
    deptId: 222009522,
    deptName: 'crimnology',
    hodName: 'HOD Name',
    studCount: 50,
  },
  {
    deptId: 222009522,
    deptName: 'commerce',
    hodName: 'HOD Name',
    studCount: 250,
  },
  {
    deptId: 222009522,
    deptName: 'computer Science',
    hodName: 'HOD Name',
    studCount: 100,
  },
  {
    deptId: 222009522,
    deptName: 'psychology',
    hodName: 'HOD Name',
    studCount: 50,
  },
  {
    deptId: 222009522,
    deptName: 'micro biology',
    hodName: 'HOD Name',
    studCount: 50,
  },
  {
    deptId: 222009522,
    deptName: 'crimnology',
    hodName: 'HOD Name',
    studCount: 50,
  },
];

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss'],
})
export class DepartmentListComponent implements OnInit {
  filter: Boolean = false;
  action: string = 'add';
  editData:any;

  constructor(private _dept:DeptServiceService, private _modalService:ModalService) {}

  displayedColumns: string[] = ['ID', 'name', 'hod', 'studCount', 'Action'];
  dataSource = ELEMENT_DATA;

  tableValue(tableRowData: any) {
    console.log(tableRowData);
    // this.datarow=tableRowData;
    //table row click function data send to service
  }

  ngOnInit(): void {
    this.getDeptData()
    console.log(this.getDeptData());
    
  }

  getDeptData(){
      this._dept.getData().subscribe((res:any)=>{
        this.dataSource = res;      
      })
    }

  edit(event:any){
    this.editData = event;
    this.action = 'edit';
    this.openModal()
  }

  delete(event:any){
    this._dept.delete(event._id).subscribe((res:any)=>{
      this.getDeptData()
    })
    
  }

  showFilter() {
    this.filter = !this.filter;
  }

  Dept: dept[] = [
    { dept: 'B.com.Gendral' },
    { dept: 'B.com.CS' },
    { dept: 'BSC.Cs' },
    { dept: 'BCA' },
    { dept: 'BSC.Crim' },
    { dept: 'B.com.Gendral' },
    { dept: 'B.com.CS' },
    { dept: 'BSC.Cs' },
    { dept: 'BCA' },
    { dept: 'BSC.Crim' },
    { dept: 'B.com.Gendral' },
    { dept: 'B.com.CS' },
    { dept: 'BSC.Cs' },
    { dept: 'BCA' },
    { dept: 'BSC.Crim' },
    { dept: 'B.com.Gendral' },
    { dept: 'B.com.CS' },
  ];

  Year: year[] = [
    { year: 'First-Year' },
    { year: 'Seconnd-year' },
    { year: 'Third-Year' },
  ];

  addDept(){
    this.action = 'add';
    this.openModal()
  }

  openModal() {
    this._modalService.openModal('deptPopup')
  }
  
  closeModal(){
    this._modalService.closeModal('deptPopup');
    this.editData=[];
  }

  deptEmittter(event:any){
    if (event && event.closeModal) {
      this.closeModal();
      this.getDeptData();
    }
  }

}
