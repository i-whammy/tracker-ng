import ActivityId from './activityId';

export default class Activity {
  id: ActivityId;
  name: string;
  constructor(name: string) {
    this.id = new ActivityId();
    this.name = name;
  }
}
