import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityDeleteComponent } from './activity-delete.component';

describe('ActivityDeleteComponent', () => {
  let component: ActivityDeleteComponent;
  let fixture: ComponentFixture<ActivityDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
