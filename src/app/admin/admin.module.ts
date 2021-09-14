import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { AdminRoutingModule } from './admin-routing.module';
import { AdmindashComponent } from './admindash/admindash.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { LeaveappComponent } from './leaveapp/leaveapp.component';


@NgModule({
  declarations: [
    AdmindashComponent,
    CreateComponent,
    EditComponent,
    TimesheetComponent,
    LeaveappComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    OrderModule
  ]
})
export class AdminModule { }
