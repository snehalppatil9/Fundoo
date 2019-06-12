import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data/data.service'
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Note } from '../../core/model/user-model'
import { NotesService } from 'src/app/core/services/notes/notes.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
  destory$: Subject<boolean> = new Subject<boolean>();
  notes: Note[] = [];

  /* Grid View*/
  direction: String = "row";
  view1: any;
  constructor(private dataService : DataService,
    private noteService : NotesService,
    private snackbar : MatSnackBar 
    ) { }

  ngOnInit() {
    this.dataService.allReminder
    .pipe(takeUntil(this.destory$))
    .subscribe(data => {
      if(data.length > 0){
        this.notes = data
      }
      
    });
  console.log('all reminder note ==================>', this.notes);


   /* Grid View*/
   this.dataService.getView().subscribe((response) => {
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
      .pipe(takeUntil(this.destory$))
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
 destroy$: Subject<boolean> = new Subject<boolean>();
 removeLabel(labelId, cardId){
  this.noteService.removeLabelFromNotes(cardId,labelId)
  .pipe(takeUntil(this.destroy$))
  .subscribe((response) =>{
    // this.anyChanges.emit({});
  },(error) => {
  }); 
}
/**
  * @description : Displaying label on note
  */
 showLabel(data){
  this.dataService.changeMessageLabel(data)
}
}
