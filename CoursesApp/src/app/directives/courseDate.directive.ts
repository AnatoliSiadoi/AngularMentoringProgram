import { ICourse } from '../Interfaces/icourse';
import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive( {
    selector: '[courseDate]'
  } )
  export class CourseDateDirective implements OnInit {

    @Input() course: ICourse;
    private currentDate: Date = new Date();
    private numberDaysRelevance: number = 14;
  
    constructor( private element: ElementRef, private renderer: Renderer2 ) 
    { 
    }
  
    ngOnInit(): void {
      if (this.isActualDate()) {
        this.renderer.addClass(this.element.nativeElement.firstChild, 'ActualCourse');
      } 
      else if (this.isFeatureDate()) {
        this.renderer.addClass(this.element.nativeElement.firstChild, 'FeatureCourse');
      }
    }
  
    private isActualDate(): boolean {
      return this.course.creationDate < this.currentDate && this.course.creationDate >= this.getActualDate();
    }

    private isFeatureDate(): boolean {
        return this.course.creationDate > this.currentDate;
    }

    private getActualDate(): Date {
        return new Date(this.currentDate.setDate(this.currentDate.getDay() - this.numberDaysRelevance));
    }
  }