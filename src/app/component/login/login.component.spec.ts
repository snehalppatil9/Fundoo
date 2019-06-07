import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
     
    })
      .compileComponents()
      // .then(() => {
      //   fixture = TestBed.createComponent(LoginComponent);
      //   component = fixture.componentInstance;
      //   component.ngOnInit();
      // }
      // );
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should be invalid', () => {
  //   // expect(component.email).toEqual('@hadf.asdhf');
  //   // expect(component.email).toEqual('@h...@adf.asdhf');
  //   // expect(component.email).toEqual('');
  //   // expect(component.email).toEqual('posi@..&sdmn');
  //   // expect(component.password).toEqual('');
  //   // expect(component.password).toEqual('dfsdfdfgf');
  //   // expect(component.password).toEqual('AAAAAAAA');
  //   // expect(component.password).toEqual('123456789');

  // });
  // it('should be valid', () => {
  //   // expect(component.email).toEqual('abc@djh.ashdg');
  //   // expect(component.password).toEqual('As12');
  // });
});
