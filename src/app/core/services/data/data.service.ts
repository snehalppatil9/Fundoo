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
  }
  private assignData = new BehaviorSubject<any[]>([]);
  allNote = this.assignData.asObservable();
  getAllNote() {
    this.noteService.getNotes().subscribe(data => {
      console.log(data.data.data);
      this.assignData.next(data.data.data);
    })
  }

  private assignLabel = new BehaviorSubject('default');
  allLabel = this.assignLabel.asObservable();
  getAllLabel() {
    this.noteService.showNoteLabels().subscribe(data => {
      console.log(data["data"].details);
      this.assignLabel.next(data["data"].details);
    })
  }

  private messageSearch = new BehaviorSubject('default');
  currentMessageSearch = this.messageSearch.asObservable();

  private viewSource = new BehaviorSubject(false);
  currentMessageView = this.viewSource.asObservable();
  changeMessageSearch(message: string) {
    this.messageSearch.next(message)
  }
}
