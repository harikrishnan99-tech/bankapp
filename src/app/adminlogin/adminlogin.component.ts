import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EmployeeservService} from '../employeeserv.service'

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  admininfo:any=[];
  username:string="";
  password:string="";
 

  constructor(private _empser:EmployeeservService,private _router:Router) { }

  ngOnInit(): void {
    this._empser.signout();
  }
  AdSign(){
    this._empser.getsigninInfo().subscribe((res:any)=>{this.admininfo=res;
    const data=this.admininfo.filter((item:any)=>(item.username==this.username)&&(item.password==this.password));
   
    if(data.length>0){
      this._empser.signin(this.username)
      this._router.navigate(['/admin/admindash'])
    }
    else{
      alert("Invalid Admin");
      this.username="";
      this.password="";
    }
    })
  }


}
