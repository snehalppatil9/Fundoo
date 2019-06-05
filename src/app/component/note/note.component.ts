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
})
export class NoteComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
 labelcard: boolean = true;
  isAchive: boolean = false;
  /**
   * @description :  use for pin/unpin
   */
  isPin: boolean = false;
  @Output() onChange = new EventEmitter;
  isDeleted: boolean = false;
  title = new FormControl('')
  description = new FormControl('')
  itemName = new FormControl('')
  image = localStorage.getItem("userImage");
  setColor: any;
  @Input() card;
  @Input() noteData;
  reminder: any;
  labels1: any;
  addNotes: Note = new Note();
  searchLabel: any;
  img: any;
  width;
  @Output() anyChanges = new EventEmitter();
  model = {
    "item": ""
  }
  constructor(private dialog: MatDialog, private noteService: NotesService, private dataService: DataService, private snackbar: MatSnackBar, private router: Router) { }


  ngOnInit() {
  }
  listArray :[];
   /**
  * 
  * @description adding a checklist
  */
 listitem(){
  if(this.model.item=='') return false;
  // this.listArray.push({"itemName" : this.model});
  this.model.item="";
}
  /**
  * @description :  it is used for notecard & list card
  */
  notecard: boolean = true;
  listNote: boolean = true;
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
    this.listNote = false;
  }
  showCheckBox(event) {
    this.listCardOpen();
  }


 
  /**
  * 
  * @description pin change on note
  */
  onPinChange($event) {
    this.isPin = $event;
  }
  pin() {
    this.isPin = !this.isPin;
    this.onChange.emit(this.isPin);
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
          this.anyChanges.emit({});
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
  /**
  * @description : set color to note
  */
  receivecolor($event) {
    this.setColor = $event
  }
  /**
  * @description :  Adding reminder to note
  */
  changeDate($event) {
    this.reminder = $event;
  }
  /**
  * @description :  Adding label to note
  */
  label($event) {
    this.labels1 = $event;
  }
  /**
  * @description :  removing label from note
  */
  labels: [];
  cancelLabel(data) {
    for (let i = 0; i < this.labels.length; i++) {
      if (this.labels[i] == data) {
        this.labels.splice(i, 1);
      }
    }
  }

  // imageId
  // onSelectImage(event, noteId): void {
  //   this.imageId = noteId
  //   const dialogRef = this.dialog.open(ImageCropComponent, {
  //     width: '400px',
  //     data: event
  //   });
  //   dialogRef.afterClosed()
  //     .pipe(takeUntil(this.destroy$))
  //     .subscribe(result => {
  //       this.img = environment.Url + localStorage.getItem("userImage");
  //     });
  // }
  // isLargeScreen() {
  //   this.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  // }
 
}
