import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  serverip = 'http://192.168.1.25:3000';

  constructor(
    private http: HttpClient,
  ) { }


  setUrl(ip: string): void {
    this.serverip = ip;
  }

  getUrl(): string {
    return this.serverip;
  }


  login(id: string, passwd: string): Observable<any> {
    // console.log('[service]', id, passwd);
    return this.http.post(`${this.serverip}/login`, { id, passwd });
  }

  changepassword(pw: string): Observable<any> {
    return this.http.post(`${this.serverip}/changepassword`, { pw });
  }

}
