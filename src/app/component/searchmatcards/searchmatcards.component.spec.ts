import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchmatcardsComponent } from './searchmatcards.component';

describe('SearchmatcardsComponent', () => {
  let component: SearchmatcardsComponent;
  let fixture: ComponentFixture<SearchmatcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchmatcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchmatcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
