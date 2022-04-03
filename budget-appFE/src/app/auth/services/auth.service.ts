import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(email: string, password: string) {
    const params = new HttpParams()
      .set('user', email)
      .set('password', password);
    return this.http
      .get('http://localhost:3002/api/login', { params })
      .pipe(tap((res) => this.setSession(res)));
  }

  public logout() {
    localStorage.removeItem('expiresIn');
    localStorage.removeItem('idToken');
  }

  public isLoggedIn() {
    const expiresIn = localStorage.getItem('expiresIn');
    if (expiresIn) {
      return Date.now() < Number(expiresIn);
    }
    return false;
  }

  private setSession(res: any) {
    console.log(res);
    const expiresIn = Date.now() + Number(res.expiresIn);
    localStorage.setItem('idToken', res.apiKey);
    localStorage.setItem('expiresIn', String(expiresIn));
  }
}
