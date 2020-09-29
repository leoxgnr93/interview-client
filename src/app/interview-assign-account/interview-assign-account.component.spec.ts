import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewAssignAccountComponent } from './interview-assign-account.component';

describe('InterviewAssignAccountComponent', () => {
  let component: InterviewAssignAccountComponent;
  let fixture: ComponentFixture<InterviewAssignAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewAssignAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewAssignAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
