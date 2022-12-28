import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { LoginQL } from '../queries/loginQL';
//import { CreateAccountInput } from '../models/createAccountInput';
import { RegisterQL } from '../queries/registerQL';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public token: string = null;
  constructor(private loginQL: LoginQL, private registerQL: RegisterQL) { }

  createAccount(fullname: string, uname: string, pass: string) {
    return this.registerQL.mutate({
      name: fullname,
      username: uname,
      password: pass
    }
    ).pipe(tap(success =>
      console.log('created account')
    ));
  }

  login(uname: string, pass: string) {
    return this.loginQL.mutate({
      username: uname,
      password: pass
    }
    ).pipe(tap(success =>
      this.token = (success as any).data.logIn.token
    ));
  }

  isLoggedIn() {
    return this.token;
  }

  logOut() {
    this.token = null;
  }
}
