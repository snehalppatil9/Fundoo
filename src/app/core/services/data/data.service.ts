import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NotesService } from '../notes/notes.service';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private noteService: NotesService) {
    this.getAllNote();
    this.getAllLabel();
    this.getReminderNotesList();
  }
  /*
  * @Description  : Show note
  */
  private assignData = new BehaviorSubject<any[]>([]);
  allNote = this.assignData.asObservable();
  getAllNote() {
    this.noteService.getNotes().subscribe(data => {
      console.log(data.data.data);
      this.assignData.next(data.data.data);
    })
  }

  /*
  * @Description  : Show Label
  */
  private assignLabel = new BehaviorSubject('default');
  allLabel = this.assignLabel.asObservable();
  getAllLabel() {
    this.noteService.showNoteLabels().subscribe(data => {
      console.log(data["data"].details);
      this.assignLabel.next(data["data"].details);
    })
  }
  /*
  * @Description  : Search message note 
  */
  private messageSearch = new BehaviorSubject('default');
  currentMessageSearch = this.messageSearch.asObservable();

  private viewSource = new BehaviorSubject(false);
  currentMessageView = this.viewSource.asObservable();
  MessageSearch(message: string) {
    // this.messageSearch.next(message)
  }
  changeView(message: boolean) {
    this.viewSource.next(message)
  }

  private messageReminder = new BehaviorSubject('default');
  currentMessageReminder = this.messageReminder.asObservable();
  changeMessageReminder(message: string) {
    this.messageReminder.next(message)
  }

  private assignReminder = new BehaviorSubject<any[]>([]);
  allReminder = this.assignReminder.asObservable();
  getReminderNotesList() {
    this.noteService.getReminderNotesList().subscribe(data => {
      console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$",data["data"].data);
      this.assignLabel.next(data["data"].data);
    })
  }
}
