import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EmployeeservService} from 'src/app/employeeserv.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  empid:any;
  emparray:any=[];

  constructor(private _empser:EmployeeservService,private _route:Router) { }

  ngOnInit(): void {
    this.singleData()
  }
  singleData()
  {
  
    this.empid= sessionStorage.getItem("user");
    this._empser.getSingleRecord(this.empid).subscribe((res)=>{
      this.emparray=res;
      console.log(this.emparray);
      
    })
  }
  logout()
  {
    if(confirm('Do you want to logout')){
      this._route.navigate(['/'])

    }
  }


}
