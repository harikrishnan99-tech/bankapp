import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeservService } from 'src/app/employeeserv.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
   
  id=0;
  empobj:any=[];
  addleavearr:any=[];

  constructor(private _empser:EmployeeservService,private _router:Router,private _actroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=Number(sessionStorage.getItem("user"))
    this._empser.getSingleRecord(this.id).subscribe((res)=>{
      this.empobj={...res}
      console.log(this.empobj);
    })
  }
  addleave(val:any){
    const addleavearr={
      id:this.empobj.id,
      name:this.empobj.name,
      post:val.post,
      leavedate:val.leavedate,
     type:val.type,
      days:val.days
    }
    this._empser.leaveAdd(addleavearr).subscribe(()=>
    alert("Applied for leave succesfully"))
    this._router.navigate(['/employee/profile'])
  }

}



