/******************************************************************************
 *  Execution       :   1. default node         cmd> note.component.ts
 *
 *  Purpose         : To add note into the database
 *
 *  @file           : note.component.ts
 *  @author         : Snehal Patil
 *  @version        : 1.0
 *  @since          : 28-04-2019
 *
 ******************************************************************************/
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NotesService } from '../../core/services/notes/notes.service'
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data/data.service';
import { Note } from '../../core/model/user-model'
import { ImageCropComponent } from '../image-crop/image-crop.component'
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material';
import { environment } from '../../../environments/environment';
import { Label } from '../../core/model/user-model';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],

})
export class NoteComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  notecard: boolean = true;
  labelcard: boolean =true;
  listcard: boolean = true;
  isAchive: boolean=  false;
  isPin: boolean=  false;
  isDeleted: boolean=  false;
  title = new FormControl('')
  description = new FormControl('')
  image = localStorage.getItem("userImage");
  setColor: any;
  @Input() Note;
  today: any;
  addNotes: Note = new Note();
  searchLabel: any;
  private img;
  private width;
  // private imageId;
  constructor(private dialog: MatDialog,private noteService: NotesService, private dataService: DataService, private snackbar: MatSnackBar, private router: Router) { }
  /**
  * @description :  opening the notecard for adding
  */
  noteCardOpen() {
    this.notecard = !(this.notecard);
  }
  /**
  * @description :  opening the New list card
  */
  listCardOpen() {
    this.listcard = !(this.listcard);
  }
  ngOnInit() {
  }
      isLargeScreen() {
        this.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      }
  /**
  * @description :  Adding note in database
  */
  addNote() {
    this.notecard = !(this.notecard);
    this.addNotes.color = this.setColor;
    this.addNotes.reminder = this.today;
    this.addNotes.image = this.img;
    var body = {
      "title": this.addNotes.title,
      "description": this.addNotes.description,
      "color": this.addNotes.color,
      "reminder": this.addNotes.reminder,
      "isArchived":this.isAchive,
      "isDeleted": this.isDeleted,
      "isPined"	: this.isPin,
    }
    console.log('add note data......', body);
    try {
      this.noteService.addNote(body).subscribe(
        data => {
          this.snackbar.open('Note added successfully.', '', { duration: 3000 });
          console.log('add note data..........', data);
        },
        error => {
          this.snackbar.open('Error while adding notes!', 'Error', { duration: 3000 });
          console.log("Error something wrong: ", error)
        });
    } catch (error) {
      this.snackbar.open('error', "", { duration: 3000 });
    }
    setTimeout(() => this.dataService.getAllNote(), 30);
  }
  receivecolor($event) {
    this.setColor = $event
  }
  changeDate($event) {
    this.today = $event;
  }
  
  imageId
  onSelectImage(event,noteId):void {
    this.imageId=noteId
    const dialogRef = this.dialog.open(ImageCropComponent, {
      width: '400px',
      data: event 
    });
    dialogRef.afterClosed()
    .pipe(takeUntil(this.destroy$))
    .subscribe(result => {
    this.img = environment.Url+localStorage.getItem("userImage")
    });
    
  }
  
  label: Label[] = [];
  private labelList = [];

  showLabel() {
    this.noteService.showNoteLabel()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.label = response["data"].details;
        this.labelList = [];
        for (let i = 0; i < this.label.length; i++) {
          this.labelList.push(this.label[i].label);
        }
      })
  }
  /**
  * 
  * @description pin change on note
  */
 onPinChange(event){
  this.isPin=event;
}
}
