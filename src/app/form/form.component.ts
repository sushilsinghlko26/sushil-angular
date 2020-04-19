
import { Component, OnInit } from '@angular/core';  
import { NgForm } from '@angular/forms';  
import { Employee } from './Employee';
@Component({  
  selector: 'app-form',  
  templateUrl: './form.component.html',  
  styleUrls: ['./form.component.css']  
})  
export class FormComponent implements OnInit {  
  title ='Form submission test';

  employee = new Employee();
  constructor() { }  
  ngOnInit() {  
  }  
  Register(regForm:NgForm){  
    console.log("submitted"+regForm);  
  } 
  getCurrentModel() { 
    return JSON.stringify(this.employee); 
  } 
}
