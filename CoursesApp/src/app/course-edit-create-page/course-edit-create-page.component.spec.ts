import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEditCreatePageComponent } from './course-edit-create-page.component';

describe('CourseEditCreatePageComponent', () => {
  let component: CourseEditCreatePageComponent;
  let fixture: ComponentFixture<CourseEditCreatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseEditCreatePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEditCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
