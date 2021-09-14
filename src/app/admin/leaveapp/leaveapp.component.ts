import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeservService } from 'src/app/employeeserv.service';

@Component({
  selector: 'app-leaveapp',
  templateUrl: './leaveapp.component.html',
  styleUrls: ['./leaveapp.component.css']
})
export class LeaveappComponent implements OnInit {
  leavearr:any=[]
  term:string="";
  p:number=1;

  constructor(private _empser:EmployeeservService,private _router:Router) { }

  ngOnInit(): void {
    this.fetchLeave()
  }
  fetchLeave(){
    this._empser.leave().subscribe((res)=>{
      this.leavearr=res;
    })
  }


}
