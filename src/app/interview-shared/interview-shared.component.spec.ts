import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewSharedComponent } from './interview-shared.component';

describe('InterviewSharedComponent', () => {
  let component: InterviewSharedComponent;
  let fixture: ComponentFixture<InterviewSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
