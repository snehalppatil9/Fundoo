import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NotesService } from '../../core/services/notes/notes.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Label } from '../../core/model/user-model'
import { DataService } from 'src/app/core/services/data/data.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-labelnote',
  templateUrl: './labelnote.component.html',
  styleUrls: ['./labelnote.component.scss']
})
export class LabelnoteComponent implements OnInit {
  @Input() label;
  labelName = '';
  labels: Label[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  /* Grid View*/
  direction: String = "row";
  wrap: string = "wrap";
  view1: any;
  constructor(private noteService: NotesService,
    private route: ActivatedRoute,
    private dataService: DataService,
    private snackbar: MatSnackBar) { }

  ngOnInit() {
    
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: Params) => {
        this.labelName = params['label'];
        this.labelNotes();
      })

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
   * @description getting the notes according to label
   */
  labelNotes() {
    this.noteService.getNotelistByLabel(this.labelName)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.labels = response["data"].data;
        console.log("this.labels in label note================>", this.labels);
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
      .subscribe(
        data => {
          this.snackbar.open('Remove Label from Notes Successfully.', '', { duration: 3000 });
          console.log('Remove Label from Notes Successfully...........', data);
        },
        error => {
          this.snackbar.open('Error while Remove Label!', 'Error', { duration: 3000 });
          console.log("Error something wrong: ", error)
        });
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
