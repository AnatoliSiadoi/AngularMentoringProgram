import { Injectable } from '@angular/core';
import { ICourse } from './../Interfaces/icourse';

@Injectable({
  providedIn: 'root'
})

export class CourseServiceService {

  private courses: ICourse[];

  constructor() { 
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

  getAll(): ICourse[] {
    return this.courses;
  }

  getById(id: number): ICourse {
    return this.courses.find(course => course.id === id);
  }

  add(course: ICourse): ICourse {
    course.id = this.courses[this.courses.length-1].id + 1;
    this.courses.push(course);
    return course;
  }

  update(course: ICourse): ICourse {
    this.courses.map(course => course.id === course.id ? course : course);
    return course;
  }

  delete(id: number): void {
    this.courses = this.courses.filter(course => course.id !== id);
  }
  
}
