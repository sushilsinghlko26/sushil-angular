import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from 'app/shared/data.service';
import { Action } from 'rxjs/scheduler/Action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
  }

  public login() {
    // Call service to authenticate user and login
    let response = true;
    if ( response ) {
      this.router.navigate(['/skills']);
      return true;
    }
  }
}
