import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackAddComponent } from './track-add.component';

describe('TrackAddComponent', () => {
  let component: TrackAddComponent;
  let fixture: ComponentFixture<TrackAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
