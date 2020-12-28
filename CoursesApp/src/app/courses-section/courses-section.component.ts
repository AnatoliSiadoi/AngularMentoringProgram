import { ICourse } from './../Interfaces/icourse';
import { Component, OnInit, Pipe } from '@angular/core';
import { CourseServiceService } from './../services/course-service.service';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { throttleTime, debounceTime } from 'rxjs/operators';
import { LoadingServiceService} from './../services/loading-service.service';

@Component({
  selector: 'app-courses-section',
  templateUrl: './courses-section.component.html',
  styleUrls: ['./courses-section.component.css']
})
export class CoursesSectionComponent implements OnInit {

  public courses: Observable<ICourse[]>; 
  public coursesWithNoDataMessage = 'No data. Feel free to add new courses';
  private startLength = 50;
  searchTerm$ = new Subject<string>();


  constructor(private courseService: CourseServiceService,
    private router: Router,
    public loadingService: LoadingServiceService) {
      this.loadingService.loadingOn();
      const result = this.searchTerm$.pipe(throttleTime(250), debounceTime(400));
      result.subscribe((val) => 
      {
        if (val.length > 3)
        {
          this.courses = this.courseService.getAll(0, this.startLength, 'date', val)
        }
      });
      this.loadingService.loadingOff();
     }

  ngOnInit(): void {
    this.courses = this.courseService.getAll(0, this.startLength);
  }

  public onDelete(id: number): void{
    this.loadingService.loadingOn();
    this.courseService.delete(id).subscribe(_ => this.courses = this.courseService.getAll(0, this.startLength-1));
    this.loadingService.loadingOff();
  }

  public LoadMore(): void{
    console.log('Load More button');
  }

  public AddCourse(): void{
    this.router.navigate(['courses/new']);
  }
}
