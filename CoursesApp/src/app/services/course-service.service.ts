import { Injectable } from '@angular/core';
import { ICourse, IAuthor } from './../Interfaces/icourse';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams  } from '@angular/common/http';
import { ICourseResponse } from './../Interfaces/icourse-response';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CourseServiceService {

  private url: string = 'http://localhost:3004';

  constructor(private httpClient: HttpClient) {}

  getAll(start: number = 0, count: number = 4,
   sort: string = 'date', textFragment: string = ''): Observable<ICourse[]> {
    return this.httpClient.get<ICourseResponse[]>(`${ this.url }/courses`,
      { 
        params: new HttpParams()
        .set('start', start.toString())
        .set('count', count.toString())
        .set('sort', sort)
        .set('textFragment', textFragment) 
      })
      .pipe(map(courses => {
        return courses.map(course => this.mapCourseResponseToCourse(course));
      }));
  }

  getById(id: string): Observable<ICourse> {
    return this.httpClient.get<ICourseResponse[]>(`${ this.url }/courses`, 
      { 
        params: new HttpParams()
        .set('id', id) 
      })
      .pipe(map(course => this.mapCourseResponseToCourse(course[0])));
  }

  add(inputCourse: ICourse): Observable<ICourse> {
    const request: ICourseResponse = this.mapCourseToCourseResponse(inputCourse);
    return this.httpClient.post<ICourse>(`${ this.url }/courses`, request);
  }

  update(course: ICourse): Observable<ICourse> {
    const request: ICourseResponse = this.mapCourseToCourseResponse(course);

    return this.httpClient.patch<ICourseResponse>(`${ this.url }/courses`,
       request,
       {
        params: new HttpParams()
        .set('id', course.id.toString()) 
      })
      .pipe(map(course => this.mapCourseResponseToCourse(course)));
  }

  delete(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${ this.url }/courses/` + id.toString());
  }

  getAuthors(): Observable<IAuthor[]> {
    return this.httpClient.get<IAuthor[]>( `${ this.url }/authors`);
  }

  private mapCourseResponseToCourse(course: ICourseResponse): ICourse {
    return {
      id: course.id,
      title: course.name,
      creationDate: new Date(course.date),
      duration: course.length,
      description: course.description,
      topRated: course.isTopRated,
      authors: course.authors
    };
  }

  private mapCourseToCourseResponse(course: ICourse): ICourseResponse {
    return {
      id: course.id,
      date: course.creationDate.toString(),
      description: course.description,
      isTopRated: course.topRated,
      length: course.duration,
      name: course.title,
      authors: course.authors
    };
  }
  
}
