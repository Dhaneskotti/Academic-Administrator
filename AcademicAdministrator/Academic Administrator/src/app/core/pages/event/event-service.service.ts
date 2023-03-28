import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventServiceService {
  constructor(private _http: HttpClient) { }

  eventData: Array<any> = [];
  API_ENDPOINT = 'http://localhost:3000';

  sendData(event: any): Observable<any> {
    return this._http.post<any>(`${this.API_ENDPOINT}/event`, event);
  }
  getData(): Observable<any> {
    return this._http.get<any>(`${this.API_ENDPOINT}/event`);
  }
  delete(event: any): Observable<any> {
    return this._http.delete<any>(`${this.API_ENDPOINT}/event/${event}`);
  }
}
