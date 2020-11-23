import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class DateFactory {
  constructor() {}

  getDate(): Date {
    return new Date();
  }
}
