import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: {
    username: string;
    password: string;
  };

  errorMessage: string = null;
  constructor(private router: Router, private accountService: AccountService) { }

  ngOnInit() {
    this.model = { username: null, password: null };
  }

  onSubmit() {
    this.errorMessage = null;
    this.accountService.login(this.model.username, this.model.password).subscribe(c => {
      this.router.navigateByUrl('/list');
    }, e => this.errorMessage = e.message);
  }
}
