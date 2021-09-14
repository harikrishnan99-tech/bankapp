import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {EmployeeservService} from 'src/app/employeeserv.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id=0;
  
  
  empobj:any=[];

  constructor(private _empser:EmployeeservService,private _router:Router,private _actroute:ActivatedRoute) { }

  ngOnInit(): void {
    this._actroute.paramMap.subscribe((param)=>{
      this.id=Number(param.get('id'));
      console.log(this.id);

    });
    this._empser.getSingleRecord(this.id).subscribe((res)=>{
      this.empobj={...res}
      console.log(this.empobj);
    })
  }
  editEmp(val:any)
 {
  const empobj={
    id:this.id,
    name:val.name,
    gender:val.gender,
    post:val.post,
    email:val.email,
    password:this.empobj.password


  }
  this._empser.updateEmployee(empobj).subscribe(()=>{
    alert("your profile updated successfully")
    this._router.navigate(['employee/profile'])
  })
 }



}
