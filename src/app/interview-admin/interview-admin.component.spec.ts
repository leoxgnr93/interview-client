import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewAdminComponent } from './interview-admin.component';

describe('InterviewAdminComponent', () => {
  let component: InterviewAdminComponent;
  let fixture: ComponentFixture<InterviewAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterviewAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
