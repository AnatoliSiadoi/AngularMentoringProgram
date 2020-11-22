import { Component, OnInit, Input } from '@angular/core';
import { FilterPipe } from '../pipes/filter.pipe';
import { ICourse } from './../Interfaces/icourse';

@Component({
  selector: 'app-searchlet',
  templateUrl: './searchlet.component.html',
  styleUrls: ['./searchlet.component.css']
})
export class SearchletComponent implements OnInit {

  @Input() courses: ICourse[]

  public inputSerchlet = 'Search something';

  constructor( private filterPipe: FilterPipe ) 
  {
  }

  ngOnInit(): void {
  }

  public Search(): void{
    this.courses = this.filterPipe.transform( this.courses, this.inputSerchlet );
    console.log('Search');
  }

}
