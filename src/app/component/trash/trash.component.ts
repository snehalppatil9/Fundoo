import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../core/services/notes/notes.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Note } from '../../core/model/user-model'
import { DataService } from 'src/app/core/services/data/data.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  constructor(private noteService: NotesService,
    private snackbar: MatSnackBar,
    private dataService: DataService,
    public dialog: MatDialog,) { }
    destroy$: Subject<boolean> = new Subject<boolean>();
  notes: Note[] = [];
  direction: String = "row";
  view1: any;
  ngOnInit() {
    this.getTrashList();
    this.dataService.getView()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.view1 = response;
        this.direction = this.view1.data
      });
  }
  getTrashList() {
    this.noteService.getTrashNotes()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.notes = response["data"].data;
        console.log("trash data=====================>", this.notes);

      }, (error) => {
      });
  }
  /**
  * @description : Delete Note
  */
  deleteforeverNotes(data) {
    var body = {
      "noteIdList": [data.id]
    }
    console.log('Delete Note......', body);
    try {
      this.noteService.deleteforeverNote(body)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
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
    setTimeout(() => this.getTrashList(), 100);
  }
  /**
  * @description : Restore Note
  */
  isDelete = false;
  delete: any;
  Restore(data, $event) {
    this.delete = $event;
    var body = {
      "isDeleted": this.isDelete,
      "noteIdList": [data.id]
    }
    console.log('Delete Note......', body);
    try {
      this.noteService.deleteNote(body)
        .pipe(takeUntil(this.destroy$))
        .subscribe(
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
    setTimeout(() => this.getTrashList(), 100);
  }
  /**
   * @Purpose : Open dialog note edit it
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
    dialogRef.afterClosed()
    .pipe(takeUntil(this.destroy$))
    .subscribe(result => {
      console.log(`Dialog closed: ${result}`);
    });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
