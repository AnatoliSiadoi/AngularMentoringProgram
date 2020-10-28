import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICourse } from './../Interfaces/icourse';
import { CoursesSectionComponent } from './courses-section.component';

describe('CoursesSectionComponent', () => {
  let component: CoursesSectionComponent;
  let fixture: ComponentFixture<CoursesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should defined function onDelete', () => {
    const idCourse: number = 1;
    const courses: ICourse[] = [
      {
        id: 1,
        title: 'title 1',
        creationDate: new Date(),
        duration: 1,
        description: 'description 1'
      },
      {
        id: 2,
        title: 'title 2',
        creationDate: new Date(),
        duration: 2,
        description: 'description 2'
      }];
      const spyOnDelete = spyOn(component, 'onDelete');
      component.courses = courses;

      component.onDelete(idCourse);

      expect(component.onDelete).toBeDefined();
      expect(spyOnDelete).toHaveBeenCalledWith(idCourse);
  });

  it('should defined function LoadMore', () => {
    expect(component.LoadMore).toBeDefined();
  });
});
