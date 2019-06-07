import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AllnoteComponent } from './allnote.component';
import { RouterTestingModule } from '@angular/router/testing';
// import { FilterPipe } from '../../filterpipe/filter.pipe';
describe('AllnoteComponent', () => {
  let component: AllnoteComponent;
  let fixture: ComponentFixture<AllnoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllnoteComponent],
      imports : [FlexLayoutModule,
        
        // FilterPipe
      ],
      providers : []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
