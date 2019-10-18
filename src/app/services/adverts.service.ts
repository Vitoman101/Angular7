import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvertsService {

  private baseUrl = '/api/v1/adverts';

  constructor(private http: HttpClient) { }

  getAdvert(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createAdvert(advert: object, userId: number, courseId: number): Observable<Object> {
    return this.http.post(`${this.baseUrl}/${userId}/${courseId}`, advert);
  }

  updateAdvert(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteAdvert(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAdvertList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
