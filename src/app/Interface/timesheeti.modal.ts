import { Time } from "@angular/common";
export interface ITimesheet {

    id: number;
    empid: number;
    name: String;
    tdate: Date;
    start: Time;
    end: Time;
    totalhours: number;
    status: String;
}
