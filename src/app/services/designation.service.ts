import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Designation } from '../models/designation';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DesignationService {
  private apiBaseUrl = environment.apiUrl+'/designation';

  constructor(private http: HttpClient) { }

  getDesignations(): Observable<Designation[]> {
    return this.http.get<Designation[]>(this.apiBaseUrl+'/getall');
  }

  getDesignation(id: number): Observable<Designation> {
    return this.http.get<Designation>(`${this.apiBaseUrl+'/get'}/${id}`);
  }

  createDesignation(designation: Designation): Observable<Designation> {
    return this.http.post<Designation>(this.apiBaseUrl+'/create', designation);
  }

  updateDesignation(designation: Designation): Observable<Designation> {
    return this.http.put<Designation>(this.apiBaseUrl+'/update', designation);
  }

  deleteDesignation(id: number): Observable<any> {
    return this.http.delete(`${this.apiBaseUrl+'/delete'}/${id}`);
  }
}
