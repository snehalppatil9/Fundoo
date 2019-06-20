import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogcartComponent } from './dialogcart.component';

describe('DialogcartComponent', () => {
  let component: DialogcartComponent;
  let fixture: ComponentFixture<DialogcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogcartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
