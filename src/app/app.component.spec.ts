import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from '../app/component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { ForgotComponent } from './component/forgot/forgot.component';
import { ResetComponent } from './component/reset/reset.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { NoteComponent } from './component/note/note.component';
import { ReminderComponent } from './component/reminder/reminder.component';
import { LabelComponent } from './component/label/label.component';
import { ArchieveComponent } from './component/archieve/archieve.component';
import { TrashComponent } from './component/trash/trash.component';
import { IconComponent } from './component/icon/icon.component';
import { AllnoteComponent } from './component/allnote/allnote.component';
import { PipePipe } from '../app/pipe/pipe.pipe';
import { SearchNoteComponent } from '../app/component/search-note/search-note.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { CollaboratorComponent } from './component/collaborator/collaborator.component';
import { ImageCropComponent } from './component/image-crop/image-crop.component';
import { SearchmatcardsComponent } from './component/searchmatcards/searchmatcards.component';
import { ShowLabelnotesComponent } from './component/show-labelnotes/show-labelnotes.component';
import { PinComponent }  from './component/pin/pin.component';
import { LabelnoteComponent } from './component/labelnote/labelnote.component';
import { AngularMaterial } from './angularmaterial';
import { FilterPipe } from './filterpipe/filter.pipe';
import { AskQuestionComponent } from './component/ask-question/ask-question.component'
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ComponentlifecycleComponent } from './component/componentlifecycle/componentlifecycle.component'
import { AddcartComponent } from './component/addcart/addcart.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
     
      declarations: [ AddcartComponent,AppComponent,ComponentlifecycleComponent,ReminderComponent,NavbarComponent,NoteComponent,LabelComponent,ArchieveComponent,TrashComponent,IconComponent,SearchNoteComponent,CollaboratorComponent,ImageCropComponent,DialogComponent,SearchmatcardsComponent,ShowLabelnotesComponent,PinComponent,LabelnoteComponent,AskQuestionComponent,FilterPipe,PipePipe,AllnoteComponent,ForgotComponent,ResetComponent,LoginComponent,RegistrationComponent],
      imports : [FlexLayoutModule,RouterTestingModule,
        AngularMaterial,MatDialogModule
      ],
      providers : [FilterPipe,PipePipe,
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'fundooNotes'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('fundooNotes');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to fundooNotes!');
  // });
});
