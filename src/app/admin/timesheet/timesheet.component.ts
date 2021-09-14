import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeservService } from 'src/app/employeeserv.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {
  timearr:any=[]
  term:string="";
  p:number=1;

  constructor(private _empser:EmployeeservService,private _router:Router) { }

  ngOnInit(): void {
    this.fetchTimesheet()
  }
  fetchTimesheet(){
    this._empser.timesheet().subscribe((res)=>{
      this.timearr=res;
    })
  }


}
