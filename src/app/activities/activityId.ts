import { v4 as uuidv4 } from 'uuid';

export default class ActivityId {
  value: string;
  constructor(id?: string) {
    this.value = id ? id : uuidv4();
  }
}
