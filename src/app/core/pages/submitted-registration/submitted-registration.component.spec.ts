import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedRegistrationComponent } from './submitted-registration.component';

describe('SubmittedRegistrationComponent', () => {
  let component: SubmittedRegistrationComponent;
  let fixture: ComponentFixture<SubmittedRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittedRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
