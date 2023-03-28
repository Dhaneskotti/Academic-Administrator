import { HttpClient } from '@angular/common/http';
import { Injectable, AfterViewInit, OnChanges } from '@angular/core';
import { v } from 'chart.js/dist/chunks/helpers.core';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_END_POINT: string = 'http://localhost:3000';
  stdreg: any;
  id: string = '';
  txt: any = '';
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

  constructor(private _http: HttpClient) {

  }


  ngAfterViewInit() {

  }

  formValidation(event: any): Observable<any> {
    return this._http.post<any>(`${this.API_END_POINT}/auth`, event)
  }

  studValidation(event: any): Observable<any> {
    return this._http.post<any>(`${this.API_END_POINT}/auth/stud`, event)
  }

  get() {
    return this._http.get<any>(`${this.API_END_POINT}/auth`)
  }

  stdget(event?: any) {
    return this._http.get<any>(`${this.API_END_POINT}/auth/stud/${event}`)
  }




}
