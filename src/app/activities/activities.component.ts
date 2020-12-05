import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity.service';
import Activity from 'src/app/services/activity';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {
  constructor(private activityService: ActivityService) {}
  activities: Activity[] = [];

  ngOnInit(): void {
    this.activities = this.activityService.getActivities();
  }
}
