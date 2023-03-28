import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { da } from 'date-fns/locale';

@Injectable({
  providedIn: 'root'
})
export class StdDataService {

  stdTableData = ELEMENT_DATA;
  API_ENDPOINT = 'http://localhost:3000';
  API_DATA: any;

  id: string = '';
  name: string = '';
  dept: string = '';
  gen: string = '';
  atted: string = '';
  dob: string = '';
  mail: string = '';
  mobile: number = 0;
  img: string = '';
  address: string = '';
  fatherName: string = '';
  motherName: string = '';
  fatherOccupation: string = '';
  motherOccupation: string = '';
  fatherMobile: number = 0;
  motherMobile: number = 0;

  constructor(public _http: HttpClient) {

    this.data()

  }

  data() {
    this.getStdData().subscribe((res: any) => { this.API_DATA = res })
  }

  public getStdData(): Observable<any> {
    return this._http.get<any>(`${this.API_ENDPOINT}/student`);
  }

  getSearchData(event: any): Observable<any> {
    return this._http.get<any>(`${this.API_ENDPOINT}/student/${event}`)
  }

  public addStudent(data: any): Observable<any> {
    return this._http.post<any>(`${this.API_ENDPOINT}/student`, data)
  }

  public updateStudent(data: any) {
    return this._http.put<any>(`${this.API_ENDPOINT}/student`, data)
  }

  public delete(data: any) {
    return this._http.delete<any>(`${this.API_ENDPOINT}/student/${data}`)
  }




  ////get table row click function data....
  testData(a: any) {
    //seprate the data
    const name = a.firstName + ' ' + a.lastName;
    const id = a.registerno;
    const dept = a.deptbranch;
    const gen = a.gender;
    const attd = a.att_dence;
    const dob = a.dob;
    const mail = a.email;
    const mobile = a.mobile;
    const img = a.img;
    const add = a.address
    const fatherName = a.fatherName;
    const fatherMobile = a.fatherMobile;
    const fatherOccupation = a.fatherOccupation
    const motherName = a.motherName;
    const motherMobile = a.motherMobile;
    const motherOccupation = a.motherOccupation

    console.log(a);


    //push the data
    this.id = id;
    this.name = name;
    this.dept = dept;
    this.gen = gen;
    this.atted = attd;
    this.dob = dob;
    this.mail = mail;
    this.mobile = mobile;
    this.img = img;
    this.address = add;
    this.fatherName = fatherName;
    this.fatherMobile = fatherMobile;
    this.fatherOccupation = fatherOccupation
    this.motherName = motherName;
    this.motherMobile = motherMobile;
    this.motherOccupation = motherOccupation
  }

}
const ELEMENT_DATA: any[] = [
  { std_ID: 222009522, name: 'Abinash', dept: 'B.com.Gendral', gender: 'male', att_dence: 70, dob: '00/00/0000', e_mail: 'abi@gmail.com', mobile: 9857463733, img: '../../../../../assets/img/abi.jpg' },
  { std_ID: 222009567, name: 'Nisha', dept: 'B.com.CS', gender: 'female', att_dence: 70, dob: '00/00/0000', e_mail: 'nisha@gmail.com', mobile: 8895634276, img: '../../../../../assets/img/nisha.jpg' },
  { std_ID: 222009648, name: 'Balaji', dept: 'BSC.Cs', gender: 'male', att_dence: 70, dob: '00/00/0000', e_mail: 'balaji@gmail.com', mobile: 9856316433, img: '../../../../../assets/img/balaji.jpg' },
  { std_ID: 222009324, name: 'Arunachalam', dept: 'BSC.Cs', gender: 'male', att_dence: 70, dob: '00/00/0000', e_mail: 'arun@gmail.com', mobile: 9876045273, img: '../../../../../assets/img/arun.jpg' },
  { std_ID: 222009579, name: 'Sofiya', dept: 'BSC.Crim', gender: 'female', att_dence: 70, dob: '00/00/0000', e_mail: 'priya@gmail.com', mobile: 9856473124, img: '../../../../../assets/img/priya.jpg' },
  { std_ID: 222009522, name: 'Abinash', dept: 'B.com.Gendral', gender: 'male', att_dence: 70, dob: '00/00/0000', e_mail: 'abi@gmail.com', mobile: 8967534295, img: '../../../../../assets/img/abi.jpg' },
  { std_ID: 222009567, name: 'Nisha', dept: 'B.com.CS', gender: 'female', att_dence: 70, dob: '00/00/0000', e_mail: 'nisha@gmail.com', mobile: 8856473210, img: '../../../../../assets/img/nisha.jpg' },
  { std_ID: 222009648, name: 'Balaji', dept: 'BSC.Cs', gender: 'male', att_dence: 70, dob: '00/00/0000', e_mail: 'balaji@gmail.com', mobile: 8899645341, img: '../../../../../assets/img/balaji.jpg' },
  { std_ID: 222009324, name: 'Arunachalam', dept: 'BSC.Cs', gender: 'male', att_dence: 70, dob: '00/00/0000', e_mail: 'arun@gmail.com', mobile: 8945362720, img: '../../../../../assets/img/arun.jpg' },
  { std_ID: 222009579, name: 'Sofiya', dept: 'BSC.Crim', gender: 'female', att_dence: 70, dob: '00/00/0000', e_mail: 'priya@gmail.com', mobile: 9985634264, img: '../../../../../assets/img/priya.jpg' },

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
  img: string;
}
