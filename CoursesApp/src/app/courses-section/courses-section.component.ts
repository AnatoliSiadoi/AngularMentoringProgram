import { ICourse } from './../Interfaces/icourse';
import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from './../services/course-service.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses-section',
  templateUrl: './courses-section.component.html',
  styleUrls: ['./courses-section.component.css']
})
export class CoursesSectionComponent implements OnInit {

  public courses: Observable<ICourse[]>; 
  public coursesWithNoDataMessage = 'No data. Feel free to add new courses';

  constructor(private courseService: CourseServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.courses = this.courseService.getAll();
  }

  public onDelete(id: number): void{
    this.courseService.delete(id);
    this.courses = this.courseService.getAll();
  }

  public LoadMore(): void{
    console.log('Load More button');
  }

  public AddCourse(): void{
    this.router.navigate(['courses/new']);
  }

}
