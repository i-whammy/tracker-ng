import { Injectable } from '@angular/core';
import Activity from './activities/activity';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  constructor() {}

  MOCK_ACTIVITIES = [
    new Activity('英単語'),
    new Activity('フランス語の勉強'),
    new Activity('aaa'),
  ];

  getActivities(): Activity[] {
    return this.MOCK_ACTIVITIES;
  }
}
