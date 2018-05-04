import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesSelectedComponent } from './movies-selected.component';

describe('MoviesSelectedComponent', () => {
  let component: MoviesSelectedComponent;
  let fixture: ComponentFixture<MoviesSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
