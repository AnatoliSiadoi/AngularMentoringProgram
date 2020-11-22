import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../Interfaces/icourse';

@Pipe({
    name: 'filter'
  })

export class FilterPipe implements PipeTransform {
  
    transform(courses: ICourse[], part: string): ICourse[] {
        return courses.filter(course => course.title.includes(part) );
    }
}