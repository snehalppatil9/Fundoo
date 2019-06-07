/******************************************************************************
 *  Execution       :   1. default node         cmd> allnote.component.ts
 *
 *  Purpose         : To get all the note data
 *
 *  @file           : allnote.component.ts
 *  @author         : Snehal Patil
 *  @version        : 1.0
 *  @since          : 28-04-2019
 *
 ******************************************************************************/
import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from '../../core/services/data/data.service'
import { Note } from '../../core/model/user-model'
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatDialog, MatCard } from '@angular/material'
import { EventEmitter } from 'events';
import { DialogComponent } from '../dialog/dialog.component'
import { NotesService } from '../../core/services/notes/notes.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-allnote',
  templateUrl: './allnote.component.html',
  styleUrls: ['./allnote.component.scss']
})
export class AllnoteComponent implements OnInit {
  notes: Note[] = [];
  message: string;
  destory$: Subject<boolean> = new Subject<boolean>();
  view: boolean;
  @Input() note;
  @Input() searchItem;
  @Output() onChangeColor = new EventEmitter();
  @Output() onChangeDate = new EventEmitter();
  @Output() anyChanges = new EventEmitter();
  isDelete = true;
  setColor: any;
  reminder: any;
  isPin: boolean = false;
  /* Grid View*/
  direction: String = "row";
  wrap: string = "wrap";
  view1: any;
  archive: any;
  delete: any;
  constructor(private dataService: DataService,
    private noteService: NotesService,
    private snackbar: MatSnackBar,
    public dialog: MatDialog,
  ) {

  }
  ngOnInit() {
    this.getNotes();

    this.dataService.currentMessageView
      .pipe(takeUntil(this.destory$))
      .subscribe(message => {
        this.view = message
      })

    /* Grid View*/
    this.dataService.getView()
      .subscribe((response) => {
        this.view1 = response;
        this.direction = this.view1.data
      });
  }

  refresh(event){
    if(event){
      this.getNotes();
    }
  }

  pinedArray = [];
  unpinedArray = [];
  getNotes() {
    this.dataService.allNote
      .pipe(takeUntil(this.destory$))
      .subscribe(data => {
        this.notes = data;
        this.pinedArray = [];
        this.unpinedArray = []
        for (let i = this.notes.length; i > 0; i--) {
          if ((this.notes[i - 1]["isDeleted"] == false) && (this.notes[i - 1]["isArchived"] == false)) {
            if (this.notes[i - 1]["isPined"] == true) {
              this.pinedArray.push(this.notes[i - 1]);
              // console.log("pinned array@@@@@@@", this.pinedArray);
            }
            else {
              this.unpinedArray.push(this.notes[i - 1]);
              // console.log("unpinned array@@@@@@@", this.unpinedArray);
            }
          }
        }
      }, (error) => {
      });
  }
  /**
   * @description : change note Color 
   */
  changeColor(data, $event) {
    this.setColor = $event;
    var body = {
      "color": this.setColor,
      "noteIdList": [data.id]
    }
    console.log('color change data......', body);
    try {
      this.noteService.changeColor(body).subscribe(
        data => {
          this.snackbar.open('color change successfully.', '', { duration: 3000 });
          console.log('color change successfully..........', data);
        },
        error => {
          this.snackbar.open('Error while color change!', 'Error', { duration: 3000 });
          console.log("Error something wrong: ", error)
        });
    } catch (error) {
      this.snackbar.open('error', "", { duration: 3000 });
    }
    setTimeout(() => this.dataService.getAllNote(), 0);
  }
  /**
  * @description : Delete Note
  */
  deleteNote(data, $event) {
    this.delete = $event;
    var body = {
      "isDeleted": this.isDelete,
      "noteIdList": [data.id]
    }
    console.log('Delete Note......', body);
    try {
      this.noteService.deleteNote(body).subscribe(
        data => {
          this.snackbar.open('Note Deleted Successfully.', '', { duration: 3000 });
          console.log('Note Deleted successfully..........', data);
        },
        error => {
          this.snackbar.open('Error while note delete!', 'Error', { duration: 3000 });
          console.log("Error something wrong: ", error)
        });
    } catch (error) {
      this.snackbar.open('error', "", { duration: 3000 });
    }
    setTimeout(() => this.dataService.getAllNote(), 0);
  }
  /**
  * @description : Add reminder in Note
  */
  addReminder(data, $event) {
    this.reminder = $event;
    var body = {
      "reminder": this.reminder,
      "noteIdList": [data.id]
    }
    console.log('Add update Reminder......', body);
    try {
      this.noteService.addUpdateReminder(body).subscribe(
        data => {
          this.snackbar.open('Add update Reminder Successfully.', '', { duration: 3000 });
          console.log('Add update Reminder successfully..........', data);
        },
        error => {
          this.snackbar.open('Error while Add update Reminder!', 'Error', { duration: 3000 });
          console.log("Error something wrong: ", error)
        });
    } catch (error) {
      this.snackbar.open('error', "", { duration: 3000 });
    }
    setTimeout(() => this.dataService.getReminderNotesList(), 0);
  }
  /**
  * @description : Remove reminder in Note
  */
  removeReminder(data, $event) {
    this.reminder = $event;
    var body = {
      "reminder": this.reminder,
      "noteIdList": [data.id]
    }
    console.log('Remove reminder Reminder......', body);
    try {
      this.noteService.removeReminder(body)
        .subscribe(
          data => {
            this.snackbar.open('Remove reminder Reminder Successfully.', '', { duration: 3000 });
            console.log('Remove reminder successfully..........', data);
          },
          error => {
            this.snackbar.open('Error while Remove reminder!', 'Error', { duration: 3000 });
            console.log("Error something wrong: ", error)
          });
    } catch (error) {
      this.snackbar.open('error', "", { duration: 3000 });
    }
    setTimeout(() => this.dataService.getReminderNotesList(), 0);
  }
  /**
  * @description : Archive Note
  */
  isArchived = true;
  archiveNote(data, $event) {
    this.archive = $event;
    var body = {
      "isArchived": this.isArchived,
      "noteIdList": [data.id]
    }
    console.log('#########Archive Note###########', body);
    try {
      this.noteService.archiveNote(body).subscribe(
        data => {
          this.snackbar.open('Archive Note Successfully.', '', { duration: 3000 });
          console.log('Archive Note successfully..........', data);
        },
        error => {
          this.snackbar.open('Error while Archive Note!', 'Error', { duration: 3000 });
          console.log("Error something wrong: ", error)
        });
    } catch (error) {
      this.snackbar.open('error', "", { duration: 3000 });
    }
    setTimeout(() => this.dataService.getAllNote(), 0);
  }
  /**
   * @Purpose : Open dialog nad edit it
   **/
  openDialog(data: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '600px',
      height: '',
      data: {
        'title': data.title,
        'description': data.description,
        'id': data.id,
      }
    });
    /* Close the dialog*/
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
    });
  }



  removeLabel(labelId, cardId) {
    this.noteService.removeLabelFromNotes(cardId, labelId)
      .pipe(takeUntil(this.destory$))
      .subscribe((response) => {

      }, (error) => {
      });
  }

  showLabel(data) {
    this.dataService.changeMessageLabel(data)
  }


  addpin(data, $event) {
    this.isPin = $event;
    let body = {
      "isPined": this.isPin,
      "noteIdList": [data.id]
    }
    this.noteService.pinChange(body)
      .subscribe((response) => {
      });
  }

  addLabel(labelId, cardId){
   
      this.noteService.addLabelToNotes(cardId, labelId)
        .subscribe((response) => {
          
          console.log("adsdasdasdasdasdsa");

        },
          error => {
            console.log("error in add label to notes");

          });
    
  }
}