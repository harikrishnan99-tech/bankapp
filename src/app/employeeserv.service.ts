import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Admini } from './Interface/admini.modal';
import {Empi} from './Interface/empi.modal';
import {adminUrl,empUrl,addUrl,editUrl, updateUrl, timeUrl, addtimeUrl, leaveUrl, leaveappUrl} from './constant'
import { ITimesheet } from './Interface/timesheeti.modal';
import { ILeave } from './Interface/leaveapp.modal';

@Injectable({
  providedIn: 'root'
})
export class EmployeeservService {

  constructor(private _http:HttpClient) { }
  getsigninInfo(){
    return this._http.get<Admini>(adminUrl)
  }
  signin(user:any){
    sessionStorage.setItem("user",user);
  
  }
  signout(){
    sessionStorage.removeItem("user");
  }
  getAllEmployee()
  {
    return this._http.get<Empi>(empUrl);
  }
  addEmployee(emp:any)
  {
    return this._http.post(addUrl,emp)
  }
  updateEmployee(editemp:any){
    const url:string=`${updateUrl}`;
    return this._http.put(url,editemp);

  }
  getSingleRecord(id:number)
  {
    const url:string=`${editUrl}/${id}`;
    return this._http.get<Empi>(url);

  }

  deleteEmployee(empid:number)
  {
    const url:string=`${empUrl}/${empid}`;
    console.log(url);
    return this._http.delete(url);

  }
  timesheet(){

    return this._http.get<ITimesheet>(timeUrl)

  }
  timesheetAdd(time:any){
    return this._http.post(addtimeUrl,time)
  }

  leave()
  {
    return this._http.get<ILeave>(leaveUrl)
  }

  leaveAdd(leave:any){
    return this._http.post(leaveappUrl,leave)
  }
  


}