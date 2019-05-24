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
import { EventEmitter } from 'events';
import { NotesService } from '../../core/services/notes/notes.service';
import { MatSnackBar, MatCard } from '@angular/material';
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
  destroy$: Subject<boolean> = new Subject<boolean>();
  isDelete = false;
  setColor: any;
  reminder: any;
  constructor(private dataService: DataService, private noteService: NotesService, private snackbar: MatSnackBar, private snackBar: MatSnackBar) { }
  ngOnInit() {
    this.dataService.allNote
      .pipe(takeUntil(this.destory$))
      .subscribe(data => this.notes = data);
    console.log('all note ==================>', this.notes);

    this.dataService.allReminder
      .pipe(takeUntil(this.destory$))
      .subscribe(data => this.notes = data);
    console.log('all Reminder ==================>', this.notes);

    this.dataService.currentMessageView
    .pipe(takeUntil(this.destory$))
      .subscribe(message => {
        this.view = message
      })
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
    setTimeout(() => this.dataService.getAllNote(), 30);
  }
  /**
  * @description : Delete Note
  */
  deleteNote(data, $event) {
    var body = {
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
    setTimeout(() => this.dataService.getAllNote(), 30);
  }
  
}