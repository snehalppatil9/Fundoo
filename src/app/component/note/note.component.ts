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
import { MatDialog, MatCard } from '@angular/material';
import { environment } from '../../../environments/environment';
import { Label } from '../../core/model/user-model';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  outputs: ['onNewEntry']
})
export class NoteComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  notecard: boolean = true;
  labelcard: boolean = true;
  listcard: boolean = true;
  isAchive: boolean = false;
  isPin: boolean = false;
  isDeleted: boolean = false;
  title = new FormControl('')
  description = new FormControl('')
  image = localStorage.getItem("userImage");
  setColor: any;
  // @Input() note;
  @Input() card;
  @Input() noteData;
  reminder: any;
  labels1:any;
  addNotes: Note = new Note();
  searchLabel: any;
  img: any;
  width;
  @Output() onNewEntry = new EventEmitter();
  constructor(private dialog: MatDialog, private noteService: NotesService, private dataService: DataService, private snackbar: MatSnackBar, private router: Router) { }
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
    this.addNotes.reminder = this.reminder;
    // this.addNotes.imageUrl = this.img;
    var body = {
      "title": this.addNotes.title,
      "description": this.addNotes.description,
      "color": this.addNotes.color,
      "reminder": this.addNotes.reminder,
      "isArchived": this.isAchive,
      "isDeleted": this.isDeleted,
      "isPined": this.isPin,
      // "imageUrl":  this.addNotes.imageUrl
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
    this.addNotes.title = null;
    this.addNotes.description = null;
  }

  receivecolor($event) {
    this.setColor = $event
  }
  changeDate($event) {
    this.reminder = $event;
  }
  label($event){
   this.labels1 = $event;
  }

  imageId
  onSelectImage(event, noteId): void {
    this.imageId = noteId
    const dialogRef = this.dialog.open(ImageCropComponent, {
      width: '400px',
      data: event
    });
    dialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        this.img = environment.Url + localStorage.getItem("userImage");
      });
  }
  /**
   * 
   * @description pin change on note
   */
  onPinChange($event) {
    this.isPin = $event;
  }

  labels: [];
  cancelLabel(data) {
    for (let i = 0; i < this.labels.length; i++) {
      if (this.labels[i] == data) {
        this.labels.splice(i, 1);
      }
    }
  }

  @Output() onChange = new EventEmitter;
  pin() {
    this.isPin = !this.isPin;
    this.onChange.emit(this.isPin);
  }
}
