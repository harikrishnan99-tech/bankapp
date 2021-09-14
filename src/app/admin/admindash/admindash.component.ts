import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EmployeeservService} from 'src/app/employeeserv.service';
@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {
  p:number=1;
  emparray:any=[];
  term:string="";
  order:any;
  reverse:boolean=false;

  constructor(private _empser:EmployeeservService,private _router:Router
  ) { }

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData(){

    this._empser.getAllEmployee().subscribe((res)=>{
      this.emparray=res;
      console.log(this.emparray);
      console.log(res);
    })

  }
  deleteEmployee(empid:any)
  {
    if(confirm(`Do you want to delete  ${empid}`)){
      this._empser.deleteEmployee(empid).subscribe(()=>this.fetchData())
      
    }
  }
  logout()
  {
    if(confirm('Do you want to logout')){
      this._router.navigate(['/'])

    }
  }
  changeOrder(val:any){
    if(val=="name"){
      this.order="name";
      this.reverse=!this.reverse;
    }
    if(val=="empid"){
      this.order="empid";
      this.reverse=!this.reverse;
    }
    
  

}}



