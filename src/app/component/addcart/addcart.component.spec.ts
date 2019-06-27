import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from '../login/login.component';
import { RouterTestingModule } from '@angular/router/testing';
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
import { PinComponent } from '../pin/pin.component';
import { LabelnoteComponent } from '../labelnote/labelnote.component';
import { AngularMaterial } from '../../angularmaterial';
import { FilterPipe } from '../../filterpipe/filter.pipe';
import { AskQuestionComponent } from '../ask-question/ask-question.component'
import { ComponentlifecycleComponent } from '../componentlifecycle/componentlifecycle.component'
import { AddcartComponent } from './addcart.component';
import { DialogcartComponent } from '../dialogcart/dialogcart.component';
import { ProductPurchaseComponent } from '../product-purchase/product-purchase.component';
import { PlaceOrderComponent } from '../place-order/place-order.component';
import { CompletePaymentComponent } from '../complete-payment/complete-payment.component';
describe('AddcartComponent', () => {
  let component: AddcartComponent;
  let fixture: ComponentFixture<AddcartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogcartComponent,CompletePaymentComponent,PlaceOrderComponent,ProductPurchaseComponent,AddcartComponent,ComponentlifecycleComponent, ReminderComponent,NavbarComponent,NoteComponent,LabelComponent,ArchieveComponent,TrashComponent,IconComponent,SearchNoteComponent,CollaboratorComponent,ImageCropComponent,DialogComponent,SearchmatcardsComponent,ShowLabelnotesComponent,PinComponent,LabelnoteComponent,AskQuestionComponent,FilterPipe,PipePipe,AllnoteComponent,ForgotComponent,ResetComponent,LoginComponent,RegistrationComponent],
      imports: [FlexLayoutModule, RouterTestingModule,
        AngularMaterial
      ],
      providers: [FilterPipe, PipePipe]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
