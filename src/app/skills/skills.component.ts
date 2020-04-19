import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Response } from '@angular/http';
import { AppError } from 'app/shared/app.error';
import { AppComponent } from 'app/app.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skillsUrl = 'https://jsonplaceholder.typicode.com/users';
  skills: any = [];

  constructor(private dataService: DataService) { }

  getJsonData(){
    this.dataService.getData(this.skillsUrl)
    .subscribe(
      response => {
          this.skills = response;
      },
      (error: AppError) => {
          if(error instanceof AppError) {
            alert("Data not found")
          }
          else {
            alert("An unexpected error occurred");
          }
      }
    )

  }

  ngOnInit() {
    // this.dataService.getData(this.skillsUrl)
    //     .subscribe(
    //       response => {
    //           this.skills = response;
    //       },
    //       (error: AppError) => {
    //           if(error instanceof AppError) {
    //             alert("Data not found")
    //           }
    //           else {
    //             alert("An unexpected error occurred");
    //           }
    //       }
    //     )
  }

}
