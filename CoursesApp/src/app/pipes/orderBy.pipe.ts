import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../Interfaces/icourse';

@Pipe({
    name: 'orderBy'
  })

  export class OrderByPipe implements PipeTransform {
  
    transform(courses: ICourse[]): ICourse[] {
      return courses?.sort( ( courseA, courseB ) => {
        if (courseA.creationDate > courseB.creationDate) { return 1; }
        if (courseA.creationDate < courseB.creationDate) { return -1; }
        return 0;
      });
    }
  
  }