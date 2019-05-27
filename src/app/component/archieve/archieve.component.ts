import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../core/services/notes/notes.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Note } from '../../core/model/user-model'
@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit {
  destory$: Subject<boolean> = new Subject<boolean>();
  notes: Note[] = [];

  constructor(private noteService: NotesService) { }

  ngOnInit() {
    this.getArchiveList();
  }
  /** 
    * 
    * @description getting the archieved note list
    */
  getArchiveList() {
    this.noteService.getArchivedList()
      .pipe(takeUntil(this.destory$))
      .subscribe((response) => {
        this.notes = response["data"].data;
        console.log("get archive note ===============>", this.notes);

      }, (error) => {
      });
  }
}
