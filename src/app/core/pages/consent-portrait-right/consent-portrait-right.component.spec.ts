import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentPortraitRightComponent } from './consent-portrait-right.component';

describe('ConsentPortraitRightComponent', () => {
  let component: ConsentPortraitRightComponent;
  let fixture: ComponentFixture<ConsentPortraitRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentPortraitRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentPortraitRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
