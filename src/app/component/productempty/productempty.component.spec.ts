import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductemptyComponent } from './productempty.component';

describe('ProductemptyComponent', () => {
  let component: ProductemptyComponent;
  let fixture: ComponentFixture<ProductemptyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductemptyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductemptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
