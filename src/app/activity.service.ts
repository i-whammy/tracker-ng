import { Injectable } from '@angular/core';
import Activity from './activities/activity';
import ActivityId from './activities/activityId';

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

  getActivity(id: ActivityId): Activity {
    console.log(this.MOCK_ACTIVITIES);
    console.log(id);
    return this.MOCK_ACTIVITIES.find(
      (activity) => activity.id.value == id.value
    )!;
  }
}
