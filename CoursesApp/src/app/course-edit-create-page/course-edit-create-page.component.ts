import { ICourse } from './../Interfaces/ICourse';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CourseServiceService } from './../services/course-service.service';

@Component({
  selector: 'app-course-edit-create-page',
  templateUrl: './course-edit-create-page.component.html',
  styleUrls: ['./course-edit-create-page.component.css']
})
export class CourseEditCreatePageComponent implements OnInit {

  public courseEditCreateForm: FormGroup;
  private identifier: number;
  private currentCourse: ICourse;

  constructor(private courseService: CourseServiceService,
    private activatedRoute: ActivatedRoute,) 
  {
    this.activatedRoute.params.subscribe(params => this.identifier = params.identifier);

    if (this.identifier) {
      this.courseService.getById(this.identifier).subscribe(course => this.currentCourse = course);

      this.courseEditCreateForm = new FormGroup({
        title: new FormControl(this.currentCourse.title),
        description: new FormControl(this.currentCourse.description),
        duration: new FormControl(this.currentCourse.duration),
        creationDate: new FormControl(this.currentCourse.creationDate),
        authors: new FormControl( this.currentCourse.authors.join(' ')),
      });
    } else {
      this.courseEditCreateForm = new FormGroup({
        title: new FormControl(),
        description: new FormControl(),
        duration: new FormControl(),
        creationDate: new FormControl(),
        authors: new FormControl(),
      });
    }

  }

  ngOnInit(): void {}

  Submit(): void {
    console.log('Submit button from CourseEditCreate.');
  }

  Cancel(): void {
    console.log('Cancel button from CourseEditCreate.');
  }

}
