import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {EmployeeservService} from 'src/app/employeeserv.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  empid=0;
  id=0;

  empobj:any=[];


  constructor(private _empser:EmployeeservService,private _router:Router,private _actroute:ActivatedRoute) { }

  ngOnInit(): void {
    this._actroute.paramMap.subscribe((param)=>{
      this.empid=Number(param.get('empid'));
      console.log(this.empid);

      

    });
  
    

    this._empser.getSingleRecord(this.empid).subscribe((res)=>{
      this.empobj={...res}
      console.log(this.empobj);
    })

  }
 editEmp(val:any)
 {
  const empobj={
    id:this.empobj.id,
    empid:this.empid,
    password:this.empobj.password,
    name:val.name,
    gender:val.gender,
    post:val.post,
    email:val.email
    


  }
  this._empser.updateEmployee(empobj).subscribe(()=>{
    alert("Employee detail updated successfully")
    this._router.navigate(['admin/admindash'])
  })
 }

}

  


