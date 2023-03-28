import { Component, OnInit } from '@angular/core';
import { TechDataService } from '../tech-data.service';
import { ModalService } from '../../../../shared/modal/modal.service';
interface dept {
  dept: string;
}
interface year {
  year: string;
}
@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.scss']
})
export class TeacherListComponent implements OnInit {


  constructor(public _teachdata: TechDataService, private modalService: ModalService) { }

  filter: Boolean = false;
  action: string = 'add';
  editData: any;
  x: any;
  displayedColumns: string[] = ['ID', 'name', 'gender', 'stat', 'e_mail', 'mobile', 'edit'];
  dataSource: any;

  ngOnInit(): void {
    this.getTeacherData()
  }

  tableValue(tableRowData: any) {
    console.log(tableRowData);
    this._teachdata.techData(tableRowData)
    // this.datarow=tableRowData;
    //table row click function data send to service
  }

  reg(event: any) {
    this.dataSource = JSON.parse(
      JSON.stringify(this._teachdata.API_DATA))
      .filter((a: any) => {
        return a.staffId.toString().indexOf(event.target.value) > -1
      })
  }

  name(event: any) {
    this.dataSource = JSON.parse(JSON.stringify(this._teachdata.API_DATA)).filter((a: any) => {
      return a.firstName.indexOf(event.target.value) > -1;
    })
  }

  depart(a: any) {
    this.x = a;
    this.dataSource = JSON.parse(
      JSON.stringify(this._teachdata.API_DATA)
    ).filter((a: any) => {
      return a.subject == this.x;
    });
  }

  reset() {
    window.location.reload();
  }


  getTeacherData() {
    this._teachdata.getTeachData().subscribe(response => {
      console.log(response);
      this.dataSource = response
    })
  }

  edit(event: any) {
    this.editData = event;
    this.action = "edit";
    this.modalService.openModal('teacherPopup');
  }

  showFilter() {
    this.filter = !this.filter
  }

  delete(event: any) {
    this._teachdata.delete(event._id).subscribe((res: any) => {
      this.getTeacherData();
    })
  }

  Dept: dept[] = [
    { dept: 'B.com.Gendral', },
    { dept: 'B.com.CS', },
    { dept: 'Bsc cs', },
    { dept: 'BCA', },
    { dept: 'BSC.Crim', },
    { dept: 'B.com.Gendral', },
    { dept: 'B.com.CS', },
    { dept: 'BSC.Cs', },
    { dept: 'BCA', },
    { dept: 'BSC.Crim', },
    { dept: 'B.com.Gendral', },
    { dept: 'B.com.CS', },
    { dept: 'Bsc cs', },
    { dept: 'BCA', },
    { dept: 'BSC.Crim', },
    { dept: 'B.com.Gendral', },
    { dept: 'B.com.CS', },
  ];

  Year: year[] = [
    { year: 'First-Year' },
    { year: 'Seconnd-year' },
    { year: 'Third-Year' },
  ]

  addteacher() {
    this.action = 'add';
    this.openModal();
  }
  openModal() {
    this.modalService.openModal('teacherPopup')
  }

  closeModal() {
    this.modalService.closeModal('teacherPopup');
    this.editData = [];
    this.getTeacherData()
  }

  teacherEmittter(event: any) {
    if (event && event.closeModal) {
      this.closeModal();
      this.getTeacherData();
    }
  }

}
