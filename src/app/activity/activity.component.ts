import { Component, OnInit } from '@angular/core';
import Activity from '../activities/activity';
import { ActivityService } from '../activity.service';
import { ActivatedRoute } from '@angular/router';
import ActivityId from '../activities/activityId';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss'],
})
export class ActivityComponent implements OnInit {
  constructor(
    private activityService: ActivityService,
    private route: ActivatedRoute
  ) {}

  activity: Activity | undefined;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.activity = this.activityService.getActivity(new ActivityId(id));
  }
}
