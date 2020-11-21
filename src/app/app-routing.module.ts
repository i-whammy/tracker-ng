import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityComponent } from './activity/activity.component';

const routes: Routes = [
  { path: '', component: ActivitiesComponent },
  { path: 'activity/:id', component: ActivityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
