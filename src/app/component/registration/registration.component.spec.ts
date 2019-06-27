import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from '../login/login.component';
import {RouterTestingModule} from '@angular/router/testing';
import { RegistrationComponent } from '../registration/registration.component';
import { ForgotComponent } from '../forgot/forgot.component';
import { ResetComponent } from '../reset/reset.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { NoteComponent } from '../note/note.component';
import { ReminderComponent } from '../reminder/reminder.component';
import { LabelComponent } from '../label/label.component';
import { ArchieveComponent } from '../archieve/archieve.component';
import { TrashComponent } from '../trash/trash.component';
import { IconComponent } from '../icon/icon.component';
import { AllnoteComponent } from '../allnote/allnote.component';
import { PipePipe } from '../../pipe/pipe.pipe';
import { SearchNoteComponent } from '../search-note/search-note.component';
import { DialogComponent } from '../dialog/dialog.component';
import { CollaboratorComponent } from '../collaborator/collaborator.component';
import { ImageCropComponent } from '../image-crop/image-crop.component';
import { SearchmatcardsComponent } from '../searchmatcards/searchmatcards.component';
import { ShowLabelnotesComponent } from '../show-labelnotes/show-labelnotes.component';
import { PinComponent }  from '../pin/pin.component';
import { LabelnoteComponent } from '../labelnote/labelnote.component';
import { AngularMaterial } from '../../angularmaterial';
import { FilterPipe } from '../../filterpipe/filter.pipe';
import { AskQuestionComponent } from '../ask-question/ask-question.component'
import { ComponentlifecycleComponent } from '../componentlifecycle/componentlifecycle.component'
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AddcartComponent } from '../addcart/addcart.component'
import { ProductPurchaseComponent } from '../product-purchase/product-purchase.component';
import { PlaceOrderComponent } from '../place-order/place-order.component';
import { CompletePaymentComponent } from '../complete-payment/complete-payment.component';
import { DialogcartComponent } from '../dialogcart/dialogcart.component'
describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogcartComponent,CompletePaymentComponent,PlaceOrderComponent,ProductPurchaseComponent,AddcartComponent,ComponentlifecycleComponent, ReminderComponent,NavbarComponent,NoteComponent,LabelComponent,ArchieveComponent,TrashComponent,IconComponent,SearchNoteComponent,CollaboratorComponent,ImageCropComponent,DialogComponent,SearchmatcardsComponent,ShowLabelnotesComponent,PinComponent,LabelnoteComponent,AskQuestionComponent,FilterPipe,PipePipe,AllnoteComponent,ForgotComponent,ResetComponent,LoginComponent,RegistrationComponent],
      imports : [FlexLayoutModule,RouterTestingModule,
        AngularMaterial
      ],
      providers : [FilterPipe,PipePipe]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(RegistrationComponent);
      component = fixture.componentInstance;
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should be invalid', () => {
    component.firstName.setValue[''];
    component.lastName.setValue[''];
    component.email.setValue[''];
    component.password.setValue[''];
    component.cpassword.setValue[''];
    // component.advance.setValue[''];
    // component.basic.setValue[''];
    expect(component.firstName.valid).toBeFalsy();
    expect(component.lastName.valid).toBeFalsy();
    expect(component.email.valid).toBeFalsy();
    expect(component.cpassword.valid).toBeFalsy();
    // expect(component.advance.valid).toBeFalsy();
    // expect(component.basic.valid).toBeFalsy();
    expect(component.password.valid).toBeFalsy();
  });
  it('should be valid', async(() => {
    component.firstName.setValue('assd');
    component.firstName.setValue('Asddf');
    component.lastName.setValue('assd');
    component.lastName.setValue('Asddf');
    component.email.setValue('assddf@sdfd.sdfsd');
    component.password.setValue('Asdd12Af');
    component.cpassword.setValue('Asdd12Af');
    expect(component.firstName.valid).toBeTruthy();
    expect(component.lastName.valid).toBeTruthy();
    expect(component.email.valid).toBeTruthy();
    expect(component.password.valid).toBeTruthy();
    expect(component.cpassword.valid).toBeTruthy();
  }));
  // it('should call advance or basic button method', () => {
  //   fixture.detectChanges();
  //   spyOn(component, 'currentLesson');
  //   el = fixture.debugElement.query(By.css('button')).nativeElement;
  //   // const advance = spyOn(component, 'currentLesson');
  //   // fixture.debugElement.query(By.css('button')).triggerEventHandler('click', null);
  //   // expect(advance).toHaveBeenCalled();
  // });
  it('it should call the login method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'register');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
  }))
});
