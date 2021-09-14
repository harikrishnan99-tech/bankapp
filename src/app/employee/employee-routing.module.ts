import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProfileComponent} from '../employee/profile/profile.component';
import {UpdateComponent} from '../employee/update/update.component';
import {PasswordchComponent} from './passwordch/passwordch.component';
import {EditemployeeComponent} from './editemployee/editemployee.component';
import { AddtimesheetComponent } from './addtimesheet/addtimesheet.component';
import { LeaveComponent } from './leave/leave.component';

const routes: Routes = [
  {path:"profile/:id",component:ProfileComponent},
  {path:"profile",component:ProfileComponent},
  {path:"update/:id",component:UpdateComponent},
  {path:"oldpassword",component:PasswordchComponent},
  {path:"editemployee",component:EditemployeeComponent},
  {path:"addtimesheet",component:AddtimesheetComponent},
  {path:"leave",component:LeaveComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
