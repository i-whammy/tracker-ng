import { Injectable } from '@angular/core';
import Achievement from './acheivement';
import { DateService } from './date.service';

@Injectable({
  providedIn: 'root',
})
export class AchievementService {
  getCurrentWeeklyAchievements(activityId: number): Achievement[] {
    return this.dateService
      .getDatesOfWeek()
      .map((date) => new Achievement(date, Math.floor(Math.random() * 10)));
  }

  constructor(private dateService: DateService) {}
}
