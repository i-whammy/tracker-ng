import { Injectable } from '@angular/core';
import Activity from './activity';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  constructor() {}

  MOCK_ACTIVITIES = [
    new Activity(1, '英単語'),
    new Activity(2, 'フランス語の勉強'),
    new Activity(3, '継続的デリバリ'),
  ];

  getActivities(): Activity[] {
    return this.MOCK_ACTIVITIES;
  }

  getActivity(id: number): Activity {
    return this.MOCK_ACTIVITIES.find((activity) => activity.id == id)!;
  }
}
