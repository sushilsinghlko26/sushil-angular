import { Injectable } from '@angular/core';
import { DataService } from './shared/data.service';
import { stringify } from 'querystring';

@Injectable()
export class AuthService {

  constructor(private dataService: DataService) { }

  isUserLoggedIn = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  ngOnInit() {
  }

  isLoggedIn(){
    let loginUrl: string = 'https://jsonplaceholder.typicode.com/users';
    let resp = this.dataService.getData(loginUrl);
    if (resp){
      return true
    }
  }

  logout(): void {
    this.isUserLoggedIn = false;
  }

}
