import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { NotesService } from '../notes/notes.service';
import { takeUntil } from 'rxjs/operators';
import { Note } from '../../model/user-model'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private noteService: NotesService) {
    this.getAllNote();
    this.getAllLabel();
    this.getReminderNotesList();
  }
  destroy$: Subject<boolean> = new Subject<boolean>();
  /* Required for Grid*/
  result: boolean = true;
  subject = new Subject

  /* gridView method*/
  gridView() {
    if (this.result) {
      this.subject.next({ data: "column" });
      this.result = false;
    }
    else {
      this.subject.next({ data: "row" });
      this.result = true;
    }
  }

  getView() {
    this.gridView();
    return this.subject.asObservable();
  }
  /*
  * @Description  : get note list
  */
  notes: Note[] = [];
  pinedArray = [];
  unpinedArray = [];
  private assignData = new BehaviorSubject<any[]>([]);
  allNote = this.assignData.asObservable();
  getAllNote() {
    this.noteService.getNotes()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        console.log("all note data in data Service ", data.data.data);
        return this.assignData.next(data.data.data);
      })
  }

  /*
  * @Description  : Show Label
  */
  private assignLabel = new BehaviorSubject('default');
  allLabel = this.assignLabel.asObservable();
  // private messageSourceLabel = new BehaviorSubject('default');
  getAllLabel() {
    this.noteService.showNoteLabels()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        console.log(data["data"].details);
        this.assignLabel.next(data["data"].details);
      })
  }
  changeMessageLabel(message: string) {
    this.assignLabel.next(message)
  }
  /*
  * @Description  : Search message note 
  */
  private messageSearch = new BehaviorSubject('default');
  currentMessageSearch = this.messageSearch.asObservable();

  private viewSource = new BehaviorSubject(false);
  currentMessageView = this.viewSource.asObservable();

  MessageSearch(message: string) {
    this.messageSearch.next(message)
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
      console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$", data["data"].data);
      this.assignReminder.next(data["data"].data);
    })
  }
}
