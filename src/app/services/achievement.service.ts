import { Injectable } from '@angular/core';
import Achievement from './acheivement';

@Injectable({
  providedIn: 'root',
})
export class AchievementService {
  MOCK_ACHIEVEMENTS = [
    new Achievement(new Date(2020, 11, -1), 0),
    new Achievement(new Date(2020, 11, 0), 0),
    new Achievement(new Date(2020, 11, 1), 0),
    new Achievement(new Date(2020, 11, 2), 0),
    new Achievement(new Date(2020, 11, 3), 3),
    new Achievement(new Date(2020, 11, 4), 4),
    new Achievement(new Date(2020, 11, 5), 5),
  ];

  getAchievements(activityId: number): Achievement[] {
    return this.MOCK_ACHIEVEMENTS;
  }

  constructor() {}
}
