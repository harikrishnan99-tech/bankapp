import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeservService } from 'src/app/employeeserv.service';

@Component({
  selector: 'app-addtimesheet',
  templateUrl: './addtimesheet.component.html',
  styleUrls: ['./addtimesheet.component.css']
})
export class AddtimesheetComponent implements OnInit {
  
  id=0;
  empobj:any=[];
  addtimearr:any=[];

  constructor(private _empser:EmployeeservService,private _router:Router,private _actroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=Number(sessionStorage.getItem("user"))
    this._empser.getSingleRecord(this.id).subscribe((res)=>{
      this.empobj={...res}
      console.log(this.empobj);
    })
  }
  addtime(val:any){
    const addtimearr={
      id:this.empobj.id,
      name:this.empobj.name,
      tdate:val.date,
      start:val.start,
      end:val.end,
      totalhours:val.totalhours
    }
    this._empser.timesheetAdd(addtimearr).subscribe(()=>
    alert("Time sheet added succesfully"))
    this._router.navigate(['/employee/profile'])
  }

}
