import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BreadcrumbsComponent } from './breadcrumbs.component';

describe('BreadcrumbsComponent', () => {
  let component: BreadcrumbsComponent;
  let fixture: ComponentFixture<BreadcrumbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreadcrumbsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it( 'should render breadcrumbs', () => {
    const breadcrumbs: string = 'breadcrumbs';

    component.breadcrumbs = breadcrumbs;
    fixture.detectChanges();
    const breadcrumbsHTMLElement: HTMLElement = fixture.debugElement.query( By.css( '.Breadcrumbs' ) ).nativeElement;

    expect( breadcrumbsHTMLElement.textContent ).toContain( breadcrumbs );
  });
});
