import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StdDataService } from '../std-data.service';
import { ModalService } from '../../../../shared/modal/modal.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  filter: Boolean = false;
  action: string = 'add';
  editData: any;
  dataSource: any;
  sample = JSON.stringify(this._stddata.stdTableData);
  x: any;
  displayedColumns: string[] = [
    'ID',
    'name',
    'dept',
    'gender',
    'mobile',
    'edit',
  ];

  constructor(
    public _stddata: StdDataService,
    private modalService: ModalService
  ) {
    // console.log(typeof JSON.parse(JSON.stringify(this._stddata.stdTableData)));
    console.log(this._stddata.stdTableData);
  }

  ngOnInit(): void {
    this.getStudentData();
  }
  tableValue(tableRowData: any) {
    this._stddata.testData(tableRowData);
  }

  getStudentData() {
    this._stddata.getStdData().subscribe((response) => {
      this.dataSource = response;
      console.log(response);
      console.log(this.dataSource);

    });
  }

  showFilter() {
    this.filter = !this.filter;
  }

  depart(a: any) {
    this.x = a;
    console.log(this.x);

    this.dataSource = JSON.parse(
      JSON.stringify(this._stddata.API_DATA)
    ).filter((a: any) => {
      return a.deptbranch == this.x;
    });
  }

  reg(event: any) {
    this.dataSource = JSON.parse(
      JSON.stringify(this._stddata.API_DATA)
    ).filter((a: any) => {
      console.log(a.registerno.toString().indexOf(event.target.value));
      return a.registerno.toString().indexOf(event.target.value) > -1;
    });
  }

  name(event: any) {
    this.dataSource = JSON.parse(
      JSON.stringify(this._stddata.API_DATA)
    ).filter((a: any) => {
      console.log(a.firstName.indexOf(event.target.value) > -1);
      return a.firstName.indexOf(event.target.value) > -1;
    });
  }

  edit(event: any) {
    this.editData = event;
    this.action = 'edit';
    this.modalService.openModal('studentPopup');
  }

  delete(event: any) {
    this._stddata.delete(event._id).subscribe((res: any) => {
      this.getStudentData();
    });
  }

  Dept: dept[] = [
    { dept: 'B.com.Gendral' },
    { dept: 'B.com.CS' },
    { dept: 'Bsc cs' },
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

  addStudent() {
    this.action = 'add';
    this.openModal();
  }

  openModal() {
    this.modalService.openModal('studentPopup');
  }

  closeModal() {
    this.modalService.closeModal('studentPopup');
    this.editData = [];
  }

  studentEmittter(event: any) {
    if (event && event.closeModal) {
      this.closeModal();
      this.getStudentData();
    }
  }
}

interface dept {
  dept: string;
}
interface year {
  year: string;
}
