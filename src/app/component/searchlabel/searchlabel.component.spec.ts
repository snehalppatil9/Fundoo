import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchlabelComponent } from './searchlabel.component';

describe('SearchlabelComponent', () => {
  let component: SearchlabelComponent;
  let fixture: ComponentFixture<SearchlabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchlabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchlabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
