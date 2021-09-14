import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EmployeeservService} from 'src/app/employeeserv.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  
  empid:number=0;
  password:string="";
  empdata:any=[];

  constructor(private _empser:EmployeeservService,private _route:Router) { }

  ngOnInit(): void {
  }
  checkEmpdata(){
    this._empser.getAllEmployee().subscribe((res:any)=>{this.empdata=res
    const data=this.empdata.filter((item:any)=>(item.password==this.password));
    if(data.length>0){
      
      this._route.navigate(['/employee','oldpassword'])
    }
    else{
      
     alert("password not matched")
     
      
     
     
    }
    })
  }

}
