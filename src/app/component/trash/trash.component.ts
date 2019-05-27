import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../core/services/notes/notes.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Note } from '../../core/model/user-model'
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  constructor(private noteService: NotesService) { }
  destroy$: Subject<boolean> = new Subject<boolean>();
  private notes:Note[]=[];
  ngOnInit() {
  }
  getTrashList(){
    this.noteService.getTrashNotes()
    .pipe(takeUntil(this.destroy$))
    .subscribe((response) =>{
      this.notes=response["data"].data;
   
    },(error) =>{
    });
  }

}
