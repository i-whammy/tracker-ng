import { TestBed } from '@angular/core/testing';

import { AchievementService } from './achievement.service';

describe('AchievementService', () => {
  let service: AchievementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AchievementService);
  });

  it('should return mock achievements', () => {
    expect(service.getAchievements(1)).toBe(service.MOCK_ACHIEVEMENTS);
  });
});
