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
  archiveList =[];
  constructor(private noteService: NotesService) { }

  ngOnInit() {
    this.getArchiveList();
  }
/** 
  * 
  * @description getting the archieved note list
  */
 getArchiveList(){
  this.noteService.getArchivedList()
  .pipe(takeUntil(this.destory$))
  .subscribe((response) =>{
    this.notes=response["data"].data;
    this.archiveList=[];
    for(let i=this.notes.length;i>0;i--){
      if(this.notes[i-1]["isDeleted"] == false && this.notes[i-1]["isArchived"]==false)
      this.archiveList.push(this.notes[i-1])
    }
  },(error) =>{
  });
}
}
