import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLabelnotesComponent } from './show-labelnotes.component';

describe('ShowLabelnotesComponent', () => {
  let component: ShowLabelnotesComponent;
  let fixture: ComponentFixture<ShowLabelnotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowLabelnotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowLabelnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
