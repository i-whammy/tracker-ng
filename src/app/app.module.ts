import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityComponent } from './activity/activity.component';

@NgModule({
  declarations: [AppComponent, ActivitiesComponent, ActivityComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
