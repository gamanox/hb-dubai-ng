import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumFeedComponent } from './medium-feed.component';

describe('MediumFeedComponent', () => {
  let component: MediumFeedComponent;
  let fixture: ComponentFixture<MediumFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediumFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
