import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://localhost:3000';
  constructor(private http: HttpClient) { }
  getUserByEmail(email: string): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
  }
}
