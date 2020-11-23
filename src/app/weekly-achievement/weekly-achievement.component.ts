import { Component, OnInit } from '@angular/core';
import { DateService } from 'src/services/date.service';

@Component({
  selector: 'app-weekly-achievement',
  templateUrl: './weekly-achievement.component.html',
  styleUrls: ['./weekly-achievement.component.scss'],
})
export class WeeklyAchievementComponent implements OnInit {
  constructor(private dateService: DateService) {}

  dates: number[] = [];

  ngOnInit(): void {
    this.dates = this.dateService
      .getDatesOfWeek()
      .map((date) => date.getDate());
  }
}
