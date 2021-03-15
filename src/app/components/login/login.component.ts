/* tslint:disable:no-trailing-whitespace */
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {FormGroup, FormGroupDirective, NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {error} from '@angular/compiler-cli/src/transformers/util';
import {pipe} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // form: FormGroup;
  // private formSubmitAttempt: boolean;
  isAuthenticated = false;
  // private formSubmitAttempt: boolean;
  item = {
    email: '',
    password: ''
  };
  constructor(private auth: AuthService, private  router: Router) { }
  // tslint:disable-next-line:typedef
  // isFieldInvalid(field: string) {
  //   return (
  //     (!this.form.get(field).valid && this.form.get(field).touched) ||
  //     (this.form.get(field).untouched && this.formSubmitAttempt)
  //   );
  // }
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef

  save(form: NgForm): void{
    const  data = {
      email: this.item.email,
      password: this.item.password
    };
  //   console.log(data);
    this.auth.login(data).subscribe(data => {
      console.log(data)
      this.router.navigateByUrl('/register');
    }, error => {
      console.log(error);
    });

  }

  save1(form: NgForm): void{
    const  data = {

      email: this.item.email,

      password: this.item.password
    };
    this.auth.login(data).subscribe(response => {
        console.log(response);
      },
      // tslint:disable-next-line:no-shadowed-variable
      error => {
        console.log(error);
      });
    this.router.navigateByUrl('/nav');
    form.resetForm();

  }
}
