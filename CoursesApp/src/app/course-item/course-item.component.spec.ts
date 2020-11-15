import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ICourse } from './../Interfaces/icourse';
import { CourseItemComponent } from './course-item.component';

describe('CourseItemComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should defined function ngOnInit', () => {
    expect(component.ngOnInit).toBeDefined();
  });

  it('should defined function ngOnChanges', () => {
    expect(component.ngOnChanges).toBeDefined();
  });

  it('should defined function ngDoCheck', () => {
    expect(component.ngDoCheck).toBeDefined();
  });

  it('should defined function ngAfterViewInit', () => {
    expect(component.ngAfterViewInit).toBeDefined();
  });

  it('should defined function ngAfterViewChecked', () => {
    expect(component.ngAfterViewChecked).toBeDefined();
  });

  it('should defined function ngAfterContentInit', () => {
    expect(component.ngAfterContentInit).toBeDefined();
  });

  it('should defined function ngAfterContentChecked', () => {
    expect(component.ngAfterContentChecked).toBeDefined();
  });

  it('should course contain equal object', () => {
    const course: ICourse = {
      id: 1,
      title: 'title',
      creationDate: new Date(),
      duration: 1,
      description: 'description'
    };

    component.course = course;

    expect(component.course).toEqual(course);
  } );

  it('raises the selected event when clicked Deleted', () => {
    const course: ICourse = {
      id: 1,
      title: 'title',
      creationDate: new Date(),
      duration: 1,
      description: 'description'
    };
    component.course = course;
  
    component.onDelete.subscribe((selectedId: number) => expect(selectedId).toBe(course.id));
    component.Delete();
  });
});
