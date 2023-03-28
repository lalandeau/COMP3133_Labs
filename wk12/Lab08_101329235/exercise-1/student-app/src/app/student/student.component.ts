import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  currentDate = new Date()

  getCurrentDate(){
    return  this.currentDate
  }

  constructor() { }

  ngOnInit(): void {
  }

}
