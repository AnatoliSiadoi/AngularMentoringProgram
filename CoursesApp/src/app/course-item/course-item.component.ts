import { ICourse } from './../Interfaces/icourse';
import { Component, OnInit, Input, Output, EventEmitter, 
  DoCheck, OnChanges, AfterContentInit, AfterContentChecked, AfterViewChecked, 
  AfterViewInit, ChangeDetectionStrategy  } from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit, 
  DoCheck,
  OnChanges,
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewChecked, 
  AfterViewInit {

  @Input() course: ICourse

  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
    this.log(`ngOnInit`);
  }

  ngOnChanges() {
    this.log(`OnChanges`);
  }

  ngDoCheck() {
    this.log(`ngDoCheck`);
  }
  
  ngAfterViewInit() {
    this.log(`ngAfterViewInit`);
  }

  ngAfterViewChecked() {
    this.log(`ngAfterViewChecked`);
  }

  ngAfterContentInit() {
    this.log(`ngAfterContentInit`);
  }

  ngAfterContentChecked() {
    this.log(`ngAfterContentChecked`);
  }

  private log(msg: string) {
      console.log(msg);
  }

  public Edit(): void{
    console.log('Edit');
  }

  public Delete(): void{
    if (window.confirm('Do you really want to delete this course?')) {
      this.onDelete.emit(this.course.id);
    }
  }

}
