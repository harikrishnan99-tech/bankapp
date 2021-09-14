import { Component, OnInit } from '@angular/core';
import {EmployeeservService} from '../employeeserv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelogin',
  templateUrl: './employeelogin.component.html',
  styleUrls: ['./employeelogin.component.css']
})
export class EmployeeloginComponent implements OnInit {
  empid:number=0;
  password:string="";
  empInfo:any=[];


  constructor(private _empser:EmployeeservService,private _route:Router) { }

  ngOnInit(): void {
    this._empser.signout();
    
  }
  checkEmpdata(){
    this._empser.getAllEmployee().subscribe((res:any)=>{this.empInfo=res
    const data=this.empInfo.filter((item:any)=>(item.id==this.empid)&&(item.password==this.password));
    if(data.length>0){
      this._empser.signin(this.empid)
      this._route.navigate(['/employee','profile',this.empid])
    }
    else{
      alert("Invalid  Employee Details")
      this.empid;
      this.password="";
    }
    })
  }


}
