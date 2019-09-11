import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private baseUrl = '/api/v1/courses';

  constructor(private http: HttpClient) { }

  getCourse(id: number): Observable<Object> { 
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCourse(course: object, id: number): Observable<Object> { 
    return this.http.post(`${this.baseUrl}/${id}`, course);
  }

  updateCourse(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCourse(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCourseList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
