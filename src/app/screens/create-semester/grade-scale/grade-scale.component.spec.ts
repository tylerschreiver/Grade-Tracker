import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeScaleComponent } from './grade-scale.component';

describe('GradeScaleComponent', () => {
  let component: GradeScaleComponent;
  let fixture: ComponentFixture<GradeScaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeScaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
