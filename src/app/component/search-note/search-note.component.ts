import { Component, OnInit } from '@angular/core';
import { DataService } from '../../core/services/data/data.service';
import { NotesService } from '../../core/services/notes/notes.service';
import { Note } from '../../core/model/user-model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-search-note',
  templateUrl: './search-note.component.html',
  styleUrls: ['./search-note.component.scss']
})
export class SearchNoteComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private dataService: DataService) { }
  notes: Note[] = [];
  message: string
  notesArray = [];
  ngOnInit() {
    this.getNotes();
    this.dataService.currentMessageSearch
    .pipe(takeUntil(this.destroy$))
      .subscribe(message => {
        this.message = message;
      })
  }
  getNotes() {
    this.dataService.allNote.
      pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.notes = response["data"].data;
        this.notesArray = [];
      }, (error) => {
        console.log("Error:", error);
      });
   }

}
