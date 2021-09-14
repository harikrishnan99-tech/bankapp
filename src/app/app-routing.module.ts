import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ DashComponent} from './dash/dash.component';
import {AdminloginComponent} from './adminlogin/adminlogin.component';
import {AuthGuard} from './authentication/auth.guard';
import {EmployeeloginComponent} from './employeelogin/employeelogin.component';

const routes: Routes = [
  {path:"",component:DashComponent},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"employeelogin",component:EmployeeloginComponent},
  {path:"admin",loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule),canActivate:[AuthGuard]},
  {path:"employee",loadChildren:()=>import('./employee/employee.module').then(m=>m.EmployeeModule),canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
