import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const ELEMENT_DATA: any = [
  { teach_ID: 709522, name: 'Rajesh', gender: 'male', subject: 'Statistics', att_dence: 70, dob: '00/00/0000', e_mail: 'abi@gmail.com', mobile: 1234567890, img: 'https://static.vecteezy.com/system/resources/thumbnails/002/184/665/small/teacher-s-day-concept-design-free-vector.jpg' },
  { teach_ID: 709546, name: 'Boomadevi', gender: 'female', subject: 'Computer', att_dence: 82, dob: '00/00/0000', e_mail: 'abi@gmail.com', mobile: 8953543563, img: 'https://media.istockphoto.com/id/1171911961/vector/female-teacher-with-books-and-chalkboard-concept-illustration-for-school-education.jpg?s=1024x1024&w=is&k=20&c=3459CcJeL6_bJ5xU2YAdZMd1zCCn1ZJN9zSFtycpOEA=' },
  { teach_ID: 709562, name: 'Arun', gender: 'male', subject: 'English', att_dence: 88, dob: '00/00/0000', e_mail: 'abi@gmail.com', mobile: 9985875755, img: 'https://previews.123rf.com/images/mayrum/mayrum1802/mayrum180200003/95387057-teacher-vector-illustration-male-character-flat-style.jpg' },
  { teach_ID: 709528, name: 'Priya', gender: 'female', subject: 'Computer', att_dence: 90, dob: '00/00/0000', e_mail: 'abi@gmail.com', mobile: 7383295436, img: 'https://as1.ftcdn.net/v2/jpg/02/72/59/66/1000_F_272596619_Yay18YTl2mjRGKDdbANNr6EWDd4Kyf0M.jpg' },
  { teach_ID: 709577, name: 'jayanthi', gender: 'female', subject: 'Computer', att_dence: 100, dob: '00/00/0000', e_mail: 'abi@gmail.com', mobile: 9965386410, img: 'https://as1.ftcdn.net/v2/jpg/00/95/53/24/1000_F_95532408_rHE1l1ChuUVjD22VWqv4VI8grFPbeLQL.jpg' },
  { teach_ID: 709522, name: 'Rajesh', gender: 'male', subject: 'Statistics', att_dence: 70, dob: '00/00/0000', e_mail: 'abi@gmail.com', mobile: 1234567890, img: 'https://static.vecteezy.com/system/resources/thumbnails/002/184/665/small/teacher-s-day-concept-design-free-vector.jpg' },
  { teach_ID: 709546, name: 'Boomadevi', gender: 'female', subject: 'Computer', att_dence: 82, dob: '00/00/0000', e_mail: 'abi@gmail.com', mobile: 8953543563, img: 'https://media.istockphoto.com/id/1171911961/vector/female-teacher-with-books-and-chalkboard-concept-illustration-for-school-education.jpg?s=1024x1024&w=is&k=20&c=3459CcJeL6_bJ5xU2YAdZMd1zCCn1ZJN9zSFtycpOEA=' },
  { teach_ID: 709562, name: 'Arun', gender: 'male', subject: 'English', att_dence: 88, dob: '00/00/0000', e_mail: 'abi@gmail.com', mobile: 9985875755, img: 'https://previews.123rf.com/images/mayrum/mayrum1802/mayrum180200003/95387057-teacher-vector-illustration-male-character-flat-style.jpg' },
  { teach_ID: 709528, name: 'Priya', gender: 'female', subject: 'Computer', att_dence: 90, dob: '00/00/0000', e_mail: 'abi@gmail.com', mobile: 7383295436, img: 'https://as1.ftcdn.net/v2/jpg/02/72/59/66/1000_F_272596619_Yay18YTl2mjRGKDdbANNr6EWDd4Kyf0M.jpg' },
  { teach_ID: 709577, name: 'jayanthi', gender: 'female', subject: 'Computer', att_dence: 100, dob: '00/00/0000', e_mail: 'abi@gmail.com', mobile: 9965386410, img: 'https://as1.ftcdn.net/v2/jpg/00/95/53/24/1000_F_95532408_rHE1l1ChuUVjD22VWqv4VI8grFPbeLQL.jpg' },

];

@Injectable({
  providedIn: 'root'
})
export class TechDataService {

  constructor(private _http: HttpClient) {

    this.data()

  }

  techTableData = ELEMENT_DATA;
  API_ENDPOINT = 'http://localhost:3000';
  API_DATA: any;

  public getTeachData(): Observable<any> {
    return this._http.get<any>(`${this.API_ENDPOINT}/teacher`)
  }

  public sendTeachData(event: any): Observable<any> {
    return this._http.post<any>(`${this.API_ENDPOINT}/teacher`, event)
  }

  public delete(event: any) {
    return this._http.delete<any>(`${this.API_ENDPOINT}/teacher/${event}`)
  }

  public update(event: any) {
    return this._http.put<any>(`${this.API_ENDPOINT}/teacher`, event)
  }

  public sendId(event: any): Observable<any> {
    return this._http.get<any>(`${this.API_ENDPOINT}/teacher/${event}`)
  }


  data() {
    this.getTeachData().subscribe((res: any) => { this.API_DATA = res })
  }



  id: string = '';
  name: string = '';
  gen: string = '';
  atted: Number;
  dob: string = '';
  mail: string = '';
  mobile: number = 0;
  img: string = '';
  address: string = '';
  sub: string = '';

  techData(a: any) {
    console.log(a.firstName, a.email);

    const id = a.staffId;
    const name = a.firstName + ' ' + a.lastName;
    const gen = a.gender;
    const attd = a.att_dence;
    const dob = a.dob;
    const email = a.email;
    const mobile = a.mobile;
    const img = a.img;
    const add = a.address
    const subject = a.subject

    this.id = id;
    this.name = name;
    this.gen = gen;
    this.sub = subject;
    this.atted = attd;
    this.mobile = mobile;
    this.img = img;
    this.address = add;
    this.dob = dob;
    this.mail = a.email
  }


}
