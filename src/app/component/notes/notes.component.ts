import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../core/services/notes/notes.service'
import { Note } from 'src/app/core/model/user-model';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes:Note[]=[];
  constructor(private noteService :NotesService) { }

  ngOnInit() {
  }
/**
  * 
  * @description refresh the page after any change in notelist
  */
 refresh(event){
  if(event){
    this.getNotes();
  }
}

/**
* 
* @description getting the note list
*/

getNotes(){
  this.noteService.getNoteList()
  .subscribe((response) =>{
    this.notes=response["data"].data;
   
  },(error) =>{
  });
}

}
