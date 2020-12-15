import { ICourse } from './../Interfaces/ICourse';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CourseServiceService } from './../services/course-service.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-edit-create-page',
  templateUrl: './course-edit-create-page.component.html',
  styleUrls: ['./course-edit-create-page.component.css']
})
export class CourseEditCreatePageComponent implements OnInit {

  public courseEditCreateForm: FormGroup;
  private identifier: string;
  private currentCourse: ICourse;

  constructor(private courseService: CourseServiceService,
    private activatedRoute: ActivatedRoute,
    public datepipe: DatePipe,
    private router: Router) 
  {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => this.identifier = params.id);

    if (this.identifier) {
      this.courseService.getById(this.identifier).subscribe(course => {
        console.log(course);
        this.currentCourse = course;
        this.courseEditCreateForm = new FormGroup({
          title: new FormControl(this.currentCourse.title),
          description: new FormControl(this.currentCourse.description),
          duration: new FormControl(this.currentCourse.duration),
          creationDate: new FormControl(this.datepipe.transform(this.currentCourse.creationDate, 'MM-dd-yyyy')),
          authors: new FormControl(), //new FormControl( this.currentCourse.authors?.join(' ')),
        });
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

  Submit(): void {
    if (this.courseEditCreateForm.invalid){
      return;
    }

    console.log(this.courseEditCreateForm.value);
    this.currentCourse =  {
      title: this.courseEditCreateForm.value.title,
      creationDate: new Date(this.courseEditCreateForm.value.creationDate),
      duration: this.courseEditCreateForm.value.duration,
      description: this.courseEditCreateForm.value.description,
      authors: this.courseEditCreateForm.value.authors.split(' ')
    }

    if (this.identifier){
      this.currentCourse.id = Number(this.identifier);
      this.courseService.update(this.currentCourse);

    } else{
      this.courseService.add(this.currentCourse);
    }

    this.router.navigate(['courses']);
  }

  Cancel(): void {
    this.router.navigate(['courses']);
    console.log('Cancel button from CourseEditCreate.');
  }

}
