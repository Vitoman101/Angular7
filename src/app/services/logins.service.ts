import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginsService {

  private baseUrl = '/api/v1/logins';

  constructor(private http: HttpClient) { }

  getLogin(id: number): Observable<Object> { 
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createLogin(login: object, id: number): Observable<Object> { 
    return this.http.post(`${this.baseUrl}/${id}`, login);
  }

  updateLogin(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteLogin(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getLoginList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
