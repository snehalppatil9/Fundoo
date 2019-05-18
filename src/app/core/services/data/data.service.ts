import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NotesService } from '../notes/notes.service';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private assignData = new BehaviorSubject<any[]>([]);
  allNote = this.assignData.asObservable();
  constructor(private noteService: NotesService) { }
  getAllNote() {
    this.noteService.getNotes().subscribe(data => {
      console.log(data.data.data);
      ; this.assignData.next(data.data.data)
    })
  }
}
