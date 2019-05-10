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

  notecardOpen() {
    this.notecard = !(this.notecard);
  }

  addNote() {
    this.notecard = !(this.notecard);
    var body = {
      "title": this.title.value,
      "description": this.description.value,
      // "UserId" : ,
    }
    console.log('console for this.register @@@@@@@@@@@@@@@@@=======================>', body);
    try {
      
        this.noteService.addNote(body).subscribe(
          data => {
            this.snackbar.open('Note added successfully......!', 'Done...!', { duration: 3000 });
            console.log('Register infor ==========>', data);
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
