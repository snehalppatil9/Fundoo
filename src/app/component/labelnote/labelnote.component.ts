import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NotesService } from '../../core/services/notes/notes.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Label } from '../../core/model/user-model'
@Component({
  selector: 'app-labelnote',
  templateUrl: './labelnote.component.html',
  styleUrls: ['./labelnote.component.scss']
})
export class LabelnoteComponent implements OnInit {
  @Input() label;
  labelName='';
  labels: Label[] = [];
  labelNotesList=[];
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private noteService : NotesService,private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>{
      this.labelName=params['label'];
      this.labelNotes();
    })
  }
 /**
  * 
  * @description getting the notes according to label
  */
 labelNotes(){
  this.noteService.getNotelistByLabel(this.labelName)
  .pipe(takeUntil(this.destroy$))
  .subscribe((response) =>{
    this.labels=response["data"].data;
    this.labelNotesList=[];
    for(let i=this.labels.length;i>0;i--){
      this.labelNotesList.push(this.labels[i-1])
    }
  },(error) => {
  });
}
}
