import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { UpdateComponent } from './update/update.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
import { PasswordchComponent } from './passwordch/passwordch.component';
import { ProfileComponent } from './profile/profile.component';
import { AddtimesheetComponent } from './addtimesheet/addtimesheet.component';
import { LeaveComponent } from './leave/leave.component';


@NgModule({
  declarations: [
    UpdateComponent,
    EditemployeeComponent,
    PasswordchComponent,
    ProfileComponent,
    AddtimesheetComponent,
    LeaveComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule
  ]
})
export class EmployeeModule { }
