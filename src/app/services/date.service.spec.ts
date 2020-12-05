import { DateService } from './date.service';

class MockDateFactory {
  date: Date = new Date();
  getDate(): Date {
    return this.date;
  }
}

describe('DateService', () => {
  let service: DateService;
  let factory: MockDateFactory;

  beforeEach(() => {
    factory = new MockDateFactory();
    service = new DateService(factory);
  });

  describe('getFirstDateOfWeek', () => {
    it('should return the first date of the week', () => {
      factory.date = new Date(2020, 10, 23);
      expect(service.getFirstDateOfWeek()).toEqual(new Date(2020, 10, 22));
    });

    it('should return the first date of the week which includes 2 months', () => {
      factory.date = new Date(2020, 11, 1);
      expect(service.getFirstDateOfWeek()).toEqual(new Date(2020, 10, 29));
    });
  });

  describe('getDatesOfWeek', () => {
    it('should return all dates of the week', () => {
      factory.date = new Date(2020, 10, 23);
      expect(service.getDatesOfWeek()).toEqual([
        new Date(2020, 10, 22),
        new Date(2020, 10, 23),
        new Date(2020, 10, 24),
        new Date(2020, 10, 25),
        new Date(2020, 10, 26),
        new Date(2020, 10, 27),
        new Date(2020, 10, 28),
      ]);
    });
  });
});
