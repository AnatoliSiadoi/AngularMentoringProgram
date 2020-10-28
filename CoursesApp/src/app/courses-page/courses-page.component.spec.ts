import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CoursesPageComponent } from './courses-page.component';

describe('CoursesPageComponent', () => {
  let component: CoursesPageComponent;
  let fixture: ComponentFixture<CoursesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have header', () => {
    const headerSelector: string = 'app-header';
    expect(fixture.debugElement.query(By.css(headerSelector))).toBeTruthy();
  } );

  it('should have footer', () => {
    const footerSelector: string = 'app-footer';
    expect(fixture.debugElement.query(By.css(footerSelector))).toBeTruthy();
  } );

  it('should have courses-section', () => {
    const coursesSection: string = 'app-courses-section';
    expect(fixture.debugElement.query(By.css(coursesSection))).toBeTruthy();
  } );
});
