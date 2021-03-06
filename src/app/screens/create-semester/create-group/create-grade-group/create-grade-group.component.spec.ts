import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGradeGroupComponent } from './create-grade-group.component';

describe('CreateGradeGroupComponent', () => {
  let component: CreateGradeGroupComponent;
  let fixture: ComponentFixture<CreateGradeGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGradeGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGradeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
