import { ICourse } from './../Interfaces/icourse';
import { Component, OnInit, Pipe } from '@angular/core';
import { CourseServiceService } from './../services/course-service.service';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { throttleTime, debounceTime } from 'rxjs/operators';
import { LoadingServiceService} from './../services/loading-service.service';
import { ICoursesState } from './../store/reducers/courses.reducer';
import { deleteCourse, loadCourses, searchCourse } from './../store/actions/courses.actions';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-courses-section',
  templateUrl: './courses-section.component.html',
  styleUrls: ['./courses-section.component.css']
})
export class CoursesSectionComponent implements OnInit {

  public courses: ICourse[]; 
  public coursesWithNoDataMessage = 'No data. Feel free to add new courses';
  searchTerm$ = new Subject<string>();
  public form: FormGroup;

  constructor(private courseService: CourseServiceService,
    private router: Router,
    private store$: Store<{courses: ICoursesState;}>,
    public loadingService: LoadingServiceService) {
      this.loadingService.loadingOn();
      this.store$.select('courses').subscribe(({courses}) => this.courses = courses);
      const result = this.searchTerm$.pipe(throttleTime(250), debounceTime(400));
      result.subscribe((val) => 
      {
        if (val.length > 3)
        {
          this.store$.dispatch(searchCourse({search: val}));
        }
      });
      this.loadingService.loadingOff();
     }

  ngOnInit(): void {
    this.form = new FormGroup({
      search: new FormControl(null, [Validators.required])
    });
    this.store$.dispatch(loadCourses());
  }

  public onDelete(id: number): void{
    this.loadingService.loadingOn();
    this.store$.dispatch(deleteCourse({id}));
    this.loadingService.loadingOff();
  }

  public LoadMore(): void{
    console.log('Load More button');
  }

  public AddCourse(): void{
    this.router.navigate(['courses/new']);
  }
}
