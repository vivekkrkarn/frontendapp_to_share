import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from '../models/user';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiBaseUrl = environment.apiUrl+'/user';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiBaseUrl+'/getall');
  }

  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.apiBaseUrl+'/get'}/${id}`);
  }

  createUser(user: User): Observable<User> {
    const headers = { 'content-type': 'application/json'}
    return this.http.post<User>(this.apiBaseUrl+'/create', JSON.stringify(user), {'headers':headers});
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(this.apiBaseUrl+'/update', user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiBaseUrl+'/delete'}/${id}`);
  }
}
