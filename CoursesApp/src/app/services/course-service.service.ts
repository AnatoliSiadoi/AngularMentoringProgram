import { Injectable } from '@angular/core';
import { ICourse } from './../Interfaces/icourse';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CourseServiceService {

  private courses: ICourse[] = [
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

  constructor() {}

  getAll(): Observable<ICourse[]> {
    return of(this.courses);
  }

  getById(id: string): Observable<ICourse> {
    return of(this.courses.find(course => String(course.id) === id));
  }

  add(inputCourse: ICourse): ICourse {
    if(this.courses.length > 0)
    {
      const courseWithMaxIdentifier = this.courses.reduce(function(prev, current) {
        return (prev.id > current.id) ? prev : current
      });
      inputCourse.id = courseWithMaxIdentifier.id + 1;
    } else inputCourse.id = 1;

    this.courses.push(inputCourse);
    return inputCourse;
  }

  update(course: ICourse): ICourse {
    console.log(this.courses);
    const updateItem = this.courses.find(this.findIndexToUpdate, course.id);
    const index = this.courses.indexOf(updateItem);
    this.courses[index] = course;
    return course;
  }

  findIndexToUpdate(newItem) { 
    return newItem.id === this;
}

  delete(id: number): void {
    this.courses = this.courses.filter(course => course.id !== id);
  }
  
}
