import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'your-backend-api-url';

  constructor(private http: HttpClient) { }

  register(user: User): Observable<any> {
    const url = `bookami/register`;
    return this.http.post(url, user);
  }
}
