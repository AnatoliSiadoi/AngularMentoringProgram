import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchletComponent } from './searchlet.component';

describe('SearchletComponent', () => {
  let component: SearchletComponent;
  let fixture: ComponentFixture<SearchletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
