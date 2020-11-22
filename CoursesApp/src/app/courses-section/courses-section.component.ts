import { ICourse } from './../Interfaces/icourse';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-section',
  templateUrl: './courses-section.component.html',
  styleUrls: ['./courses-section.component.css']
})
export class CoursesSectionComponent implements OnInit {

  public courses: ICourse[]; 
  public coursesWithNoDataMessage = 'No data. Feel free to add new courses';

  constructor() { }

  ngOnInit(): void {
    //this.courses = [];
    this.courses = [
      {
        id: 1,
        title: 'title 1',
        creationDate: new Date('2020-12-31T00:00:00'),
        duration: 1,
        description: 'description 1',
        topRated: true
      },
      {
        id: 2,
        title: 'title 2',
        creationDate: new Date('2020-10-10T00:00:00'),
        duration: 200,
        description: 'description 2'
      },
      {
        id: 3,
        title: 'title 3',
        creationDate: new Date(),
        duration: 300,
        description: 'description 3'
      },
      {
        id: 4,
        title: 'title 4',
        creationDate: new Date(),
        duration: 400,
        description: 'description 4',
        topRated: true
      }];
  }

  public onDelete(id: number): void{
    this.courses = this.courses.filter((item: ICourse) => item.id !== id);
  }

  public LoadMore(): void{
    console.log('Load More button');
  }

}
