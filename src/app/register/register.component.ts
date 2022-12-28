import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { flatMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: {
    fullname: string;
    username: string;
    password: string;
  };
  errorMessage: string = null;

  constructor(private acctService: AccountService, private router: Router) { }

  ngOnInit() {
    this.model = { fullname: null, username: null, password: null };
  }

  onSubmit() {
    this.errorMessage = null;
    this.acctService.createAccount(this.model.fullname, this.model.username, this.model.password).
      pipe(flatMap(success => this.acctService.login(this.model.username, this.model.password))).
      subscribe(c => {
        this.router.navigateByUrl('/list');
      },
        e => {
          this.errorMessage = e.message
        }
      );
  }
}
