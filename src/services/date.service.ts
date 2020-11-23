import { Injectable } from '@angular/core';
import DateFactory from './dateFactory';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  constructor(private dateFactory: DateFactory) {}

  getDatesOfWeek(): Date[] {
    const firstDate = this.getFirstDateOfWeek();
    const dates = [firstDate];
    for (var i = 1; i < 7; i++) {
      dates.push(
        new Date(
          firstDate.getFullYear(),
          firstDate.getMonth(),
          firstDate.getDate() + i
        )
      );
    }
    return dates;
  }

  getFirstDateOfWeek(): Date {
    const today = this.dateFactory.getDate();
    const day = today.getDay();
    return new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate() - day
    );
  }
}
