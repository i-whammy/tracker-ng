import { Component, OnInit } from '@angular/core';
import Activity from 'src/app/services/activity';
import { ActivityService } from 'src/app/services/activity.service';
import { ActivatedRoute } from '@angular/router';
import Achievement from 'src/app/services/acheivement';
import { AchievementService } from '../services/achievement.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {
  constructor(
    private activityService: ActivityService,
    private achievementService: AchievementService,
    private route: ActivatedRoute
  ) {}

  activity: Activity | undefined;
  achievements: Achievement[] = [];

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.activity = this.activityService.getActivity(id);
    this.achievements = this.achievementService.getAchievements(id);
  }
}
