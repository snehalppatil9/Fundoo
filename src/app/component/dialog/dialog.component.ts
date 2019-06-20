import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Note } from '../../core/model/user-model'
import { MAT_DIALOG_DATA, MatSnackBar, MatDialogRef } from '@angular/material';
import { NotesService } from '../../core/services/notes/notes.service'
import { DataService } from '../../core/services/data/data.service'
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  /**
    * @Purpose : Bind title and description
    **/
   @ViewChild('title') title: ElementRef;
   @ViewChild('description') description: ElementRef ;

  /**
    * @Purpose : Note model
    **/
  addNotes: Note = new Note();
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private noteService: NotesService,
    private dataService: DataService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  /**
    * @Purpose :For close dialog box
    **/
  onNoClick(): void {
    this.dialogRef.close();
  }

  /**
    * @Purpose : Update Note
    **/
  updateNote(data) {
    var body = {
      "title": this.title,
      "description": this.description,
      "noteId": [data.id] /* Access noteId for particular note*/
    }
    console.log('console for updateNote ============', body);
    try {
      this.noteService.updateNote(body)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
          data => {
            this.snackbar.open('Note update successfully......!', 'Done...!', { duration: 3000 });
            console.log('Note update successfully ==========>', data);
          },
          error => {
            this.snackbar.open('Error while update note......!', 'Error', { duration: 3000 });
            console.log("Error while update note ===========>", error)
          });
    } catch (error) {
      this.snackbar.open('error', "", { duration: 3000 });
    }
    setTimeout(() => this.dataService.getAllNote(), 100);
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
