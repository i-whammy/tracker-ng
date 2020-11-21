import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly-achievement',
  templateUrl: './weekly-achievement.component.html',
  styleUrls: ['./weekly-achievement.component.scss'],
})
export class WeeklyAchievementComponent implements OnInit {
  constructor() {}

  dates = [22, 23, 24, 25, 26, 27, 28];

  ngOnInit(): void {}
}
