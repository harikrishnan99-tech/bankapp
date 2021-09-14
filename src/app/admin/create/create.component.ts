import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EmployeeservService} from 'src/app/employeeserv.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  addemp:any=[];

  constructor(private _empser:EmployeeservService,private _router:Router) { }

  ngOnInit(): void {
  }
  addEmp(val:any){
    const addemp={
      name:val.name,
      gender:val.gender,
      post:val.post,
      email:val.email,
      empid:val.empid,
      password:val.password


    }
    this._empser.addEmployee(addemp).subscribe(()=>{
      alert("New employee added succesfully")
      this._router.navigate(['/admin/admindash'])

    })
  }


}
