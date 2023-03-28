import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeptServiceService {

  constructor(private _http:HttpClient) { }
  API_ENDPOINT='http://localhost:3000';




  getData():Observable<any>{
    return this._http.get<any>(`${this.API_ENDPOINT}/department`)
  }
  sendData(event:any):Observable<any>{
    return this._http.post<any>(`${this.API_ENDPOINT}/department`, event);
  }  

  delete(event:any):Observable<any>{
    return this._http.delete<any>(`${this.API_ENDPOINT}/department/${event}`)
  }
  update(event:any){
    return this._http.put<any>(`${this.API_ENDPOINT}/department`,event)
  }

}
