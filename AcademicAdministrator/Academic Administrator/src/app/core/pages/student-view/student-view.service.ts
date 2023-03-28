import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StudentViewService {

  // stdTableData = ELEMENT_DATA;
  API_ENDPOINT = 'http://localhost:3000';
  API_DATA: any;

  id: string = '';
  name: string = 'dhanes';
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
  studentData: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  b: any

  constructor(public _http: HttpClient) {

    this.data()
    // console.log(this.address);
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
  setUserData(a?: any) {
    console.log('retyuio', a)
    this.studentData.next(a);
    console.log('retyuio', this.studentData.value)
    this.b = { ...a };
    console.log('b', this.b);

  }

  getUserData() {
    console.log('asdfas');
    console.log(this.studentData.value);
    return this.studentData.asObservable()
  }

}
