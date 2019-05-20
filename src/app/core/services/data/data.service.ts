import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NotesService } from '../notes/notes.service';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private assignData = new BehaviorSubject<any[]>([]);
  allNote = this.assignData.asObservable();
  constructor(private noteService: NotesService) {
    this.getAllNote();
    this.getAllLabel();
   }
  getAllNote() {
    this.noteService.getNotes().subscribe(data => {
      console.log(data.data.data);
      ; this.assignData.next(data.data.data)
    })
  }

  private assignLabel = new BehaviorSubject('default');
  allLabel = this.assignLabel.asObservable();
   getAllLabel() {
    this.noteService.showNoteLabels().subscribe(data => {
      console.log(data["data"].details);
      ; this.assignLabel.next(data["data"].details)
    })
  }


  private messageSourceSearch = new BehaviorSubject('default');
  currentMessageSearch = this.messageSourceSearch.asObservable();
  private viewSource = new BehaviorSubject(false)
  currentMessageView = this.viewSource.asObservable();
  changeMessageSearch(message : string){
    this.messageSourceSearch.next(message)
  }
}
