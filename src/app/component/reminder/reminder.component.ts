import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data/data.service'
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Note } from '../../core/model/user-model'
import { NotesService } from 'src/app/core/services/notes/notes.service';
import { MatSnackBar, MatDialog } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component'
@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  notes: Note[] = [];

  /* Grid View*/
  direction: String = "row";
  view1: any;
  constructor(private dataService: DataService,
    private noteService: NotesService,
    private snackbar: MatSnackBar,
    private dialog : MatDialog
  ) { }

  ngOnInit() {
    this.dataService.allReminder
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        if (data.length > 0) {
          this.notes = data
        }

      });
    console.log('all reminder note ==================>', this.notes);


    /* Grid View*/
    this.dataService.getView()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.view1 = response;
        this.direction = this.view1.data
      });
  }
  /** 
   * 
   * @description getting the reminder note list
   */
  getReminderNotesList() {
    this.noteService.getReminderNotesList()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.notes = response["data"].data.reminder;
        console.log("get reminder note ===============>", this.notes);

      }, (error) => {
      });
  }
  /**
 * @description : Remove reminder in Note
 */
  reminder: any;
  removeReminder(data, $event) {
    this.reminder = $event;
    var body = {
      "reminder": this.reminder,
      "noteIdList": [data.id]
    }
    console.log('Remove reminder Reminder......', body);
    try {
      this.noteService.removeReminder(body)
        .pipe(takeUntil(this.destroy$))
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
    setTimeout(() => this.dataService.getReminderNotesList(), 30);
  }
  /**
    * @description : remove label from note
    */
  
  removeLabel(labelId, cardId) {
    this.noteService.removeLabelFromNotes(cardId, labelId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        // this.anyChanges.emit({});
      }, (error) => {
      });
  }
  /**
    * @description : Displaying label on note
    */
  showLabel(data) {
    this.dataService.changeMessageLabel(data)
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
