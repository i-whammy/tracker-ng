import { Component, Input, OnInit } from '@angular/core';
import Achievement from 'src/app/services/acheivement';
import { DateService } from 'src/app/services/date.service';

@Component({
  selector: 'app-weekly-achievement',
  templateUrl: './weekly-achievement.component.html',
  styleUrls: ['./weekly-achievement.component.scss'],
})
export class WeeklyAchievementComponent implements OnInit {
  constructor(private dateService: DateService) {}

  dates: number[] = [];
  private _achievements: Achievement[] = [];

  @Input()
  get achievements() {
    return this._achievements;
  }

  set achievements(achievements: Achievement[]) {
    this._achievements = achievements || [];
  }

  ngOnInit(): void {
    this.dates = this.dateService
      .getDatesOfWeek()
      .map((date) => date.getDate());
  }

  toAchievementRadius(value: number): number {
    return value * 10;
  }
}
