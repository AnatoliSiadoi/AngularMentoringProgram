import { ICourse } from './../Interfaces/icourse';
import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from './../services/course-service.service';

@Component({
  selector: 'app-courses-section',
  templateUrl: './courses-section.component.html',
  styleUrls: ['./courses-section.component.css']
})
export class CoursesSectionComponent implements OnInit {

  public courses: ICourse[]; 
  public coursesWithNoDataMessage = 'No data. Feel free to add new courses';

  constructor(private courseService: CourseServiceService) { }

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

}
