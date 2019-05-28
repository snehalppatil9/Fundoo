import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data/data.service'
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Note } from '../../core/model/user-model'
import { NotesService } from 'src/app/core/services/notes/notes.service';
@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
  destory$: Subject<boolean> = new Subject<boolean>();
  notes: Note[] = [];
  constructor(private dataService : DataService,private noteService : NotesService) { }

  ngOnInit() {
    this.dataService.allReminder
    .pipe(takeUntil(this.destory$))
    .subscribe(data => this.notes = data);
  console.log('all reminder note ==================>', this.notes);
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
        console.log("get reminder note############### ===============>", this.notes);

      }, (error) => {
      });
  }
}
