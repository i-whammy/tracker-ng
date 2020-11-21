import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklyAchievementComponent } from './weekly-achievement.component';

describe('WeeklyAchievementComponent', () => {
  let component: WeeklyAchievementComponent;
  let fixture: ComponentFixture<WeeklyAchievementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeeklyAchievementComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklyAchievementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
