import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {EmployeeservService} from 'src/app/employeeserv.service';

@Component({
  selector: 'app-passwordch',
  templateUrl: './passwordch.component.html',
  styleUrls: ['./passwordch.component.css']
})
export class PasswordchComponent implements OnInit {
  empid=0;
  
  emparr:any=[];


  constructor(private _empser:EmployeeservService,private _router:Router,private _actroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.empid=Number(sessionStorage.getItem("user"))
    this._empser.getSingleRecord(this.empid).subscribe((res)=>{
      this.emparr={...res}
      console.log(this.emparr);
    })

  }
  changePass(val:any)
 {
  const emparr={
    empid:this.empid,
    name:this.emparr.name,
    gender:this.emparr.gender,
    post:this.emparr.post,
    email:this.emparr.email,
    password:val.password




  }
  this._empser.updateEmployee(emparr).subscribe(()=>{
    alert("password updated successfully")
    this._router.navigate(['employee/profile'])
  })
 }

}



