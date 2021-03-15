import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  item = {
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: ''
  };
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  save(form: NgForm): void{
    const  data = {
      firstname: this.item.firstname,
      lastname: this.item.lastname,
      email: this.item.email,
      phone: this.item.phone,
      password: this.item.password
    };
    this.auth.create(data).subscribe(response => {
      console.log(response);
    },
      error => {
      console.log(error);
      });
    this.router.navigateByUrl('/login');
    form.resetForm();

  }
}
