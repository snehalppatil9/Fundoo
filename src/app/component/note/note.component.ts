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
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NotesService } from '../../core/services/notes/notes.service'
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from 'src/app/core/services/data/data.service';
import { Note } from '../../core/model/user-model'
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
  
})
export class NoteComponent implements OnInit {
  notecard: boolean = true;
  listcard: boolean = true;
  coloradd:  Note= new Note();
  title = new FormControl('')
  description = new FormControl('')
  setColor: any;
 // addNotes: Note = new Note();
  constructor(private noteService: NotesService,private dataService : DataService, private snackbar: MatSnackBar, private router: Router) { }
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
  /**
  * @description :  Adding note in database
  */
  addNote() {
    this.notecard = !(this.notecard);
    this.coloradd.color = this.setColor;
    var body = {
      "title": this.title.value,
      "description": this.description.value,
      "color": this.coloradd.color
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
    setTimeout(() =>this.dataService.getAllNote(),0);
  }
  receivecolor($event) {
    this.setColor = $event
  }
}
