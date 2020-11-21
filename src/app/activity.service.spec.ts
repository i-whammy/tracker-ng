import { TestBed } from '@angular/core/testing';
import Activity from './activities/activity';
import ActivityId from './activities/activityId';

import { ActivityService } from './activity.service';

describe('ActivityService', () => {
  let service: ActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return mock activities', () => {
    expect(service.getActivities()).toBe(service.MOCK_ACTIVITIES);
  });

  it('should return activity with id', () => {
    const testRecord = new Activity('for testing');
    service.MOCK_ACTIVITIES.push(testRecord);
    expect(service.getActivity(testRecord.id)).toBe(testRecord);
  });
});
