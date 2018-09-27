import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieNewReviewComponent } from './movie-new-review.component';

describe('MovieNewReviewComponent', () => {
  let component: MovieNewReviewComponent;
  let fixture: ComponentFixture<MovieNewReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieNewReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieNewReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
