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
import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../core/services/notes/notes.service'
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})

export class NoteComponent implements OnInit {
  private notecard: boolean = true;
  title = new FormControl('')
  description = new FormControl('')
  constructor(private noteService : NotesService,private snackbar: MatSnackBar,private router:Router) { }

  /**
  * 
  * @description opening the notecard for adding
  */
  noteCardOpen(){
    this.notecard=!(this.notecard);
  }
 
  ngOnInit() {
  }

  addNote() {
    this.notecard = !(this.notecard);
    var body = {
      "title": this.title.value,
      "description": this.description.value,
    }
    console.log('add note data......', body);
    try {
      
        this.noteService.addNote(body).subscribe(
          data => {
            this.snackbar.open('Note added successfully......', '', { duration: 3000 });
            console.log('add note data..........', data);
          },
          error => {
            this.snackbar.open('Error while adding note......!', 'Error', { duration: 3000 });
            console.log("Error something wrong: ", error)
          });
     
    } catch (error) {
      this.snackbar.open('error', "", { duration: 3000 });
    }
  }
  }
