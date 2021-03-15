import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
  }

  // tslint:disable-next-line:typedef
  onLogout() {
    this.authService.logout();
  }

}
