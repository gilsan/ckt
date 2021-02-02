import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpEventType, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imsg, Iuser, url } from './models';

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  constructor(
    private http: HttpClient,
  ) { }


  login(id: string, passwd: string): Observable<any> {
    // console.log('[service]', id, passwd);
    return this.http.post(`${url}/login`, { id, passwd });
  }

  changepassword(pw: string): Observable<any> {
    return this.http.post(`${url}/changepassword`, { pw });
  }

}
