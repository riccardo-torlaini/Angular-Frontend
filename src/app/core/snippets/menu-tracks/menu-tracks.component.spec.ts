import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTracksComponent } from './menu-tracks.component';

describe('MenuTracksComponent', () => {
  let component: MenuTracksComponent;
  let fixture: ComponentFixture<MenuTracksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTracksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTracksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
