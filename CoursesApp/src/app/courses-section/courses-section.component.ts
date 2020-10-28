import { ICourse } from './../Interfaces/icourse';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-section',
  templateUrl: './courses-section.component.html',
  styleUrls: ['./courses-section.component.css']
})
export class CoursesSectionComponent implements OnInit {

  public courses: ICourse[]; 

  constructor() { }

  ngOnInit(): void {
    this.courses = [
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
  }

  public onDelete(id: number): void{
    this.courses = this.courses.filter((item: ICourse) => item.id !== id);
  }

  public LoadMore(): void{
    console.log('Load More button');
  }

}
