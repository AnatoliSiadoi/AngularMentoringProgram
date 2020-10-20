import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchlet',
  templateUrl: './searchlet.component.html',
  styleUrls: ['./searchlet.component.css']
})
export class SearchletComponent implements OnInit {

  public inputSerchlet = 'Search something';

  constructor() { }

  ngOnInit(): void {
  }

  public Search(): void{
    console.log('Search');
  }

}
