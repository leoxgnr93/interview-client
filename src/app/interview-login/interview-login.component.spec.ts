import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewLoginComponent } from './interview-login.component';

describe('InterviewLoginComponent', () => {
  let component: InterviewLoginComponent;
  let fixture: ComponentFixture<InterviewLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
