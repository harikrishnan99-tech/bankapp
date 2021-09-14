import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

import{AdmindashComponent} from './admindash/admindash.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { LeaveappComponent } from './leaveapp/leaveapp.component';


const routes: Routes = [
  {path:"admindash" ,component:AdmindashComponent},
  {path:"create" , component:CreateComponent},
  {path:"edit/:empid",component:EditComponent},  
  {path:"timesheet",component:TimesheetComponent},
  {path:"leaveApp",component:LeaveappComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
