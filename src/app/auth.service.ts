import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import {Router} from '@angular/router';
import {LoginComponent} from './components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  // tslint:disable-next-line:typedef
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  constructor(private http: HttpClient, private router: Router) { }
  create(data): Observable<any>{
    return this.http.post('http://localhost:8000/registration/user', data);
  }
  login(data): Observable<any>{
    return this.http.post('http://localhost:8000/login/user', data);
    this.loggedIn.next(true);
  }
  // tslint:disable-next-line:typedef
  logout() {
    this.loggedIn.next(false);
    this.router.navigateByUrl('/login');
  }
}
