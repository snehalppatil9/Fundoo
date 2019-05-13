/******************************************************************************
 *  Execution       :   1. default node         cmd> allnote.component.ts
 *
 *  Purpose         : To get all the note data
 *
 *  @file           : allnote.component.ts
 *  @author         : Snehal Patil
 *  @version        : 1.0
 *  @since          : 28-04-2019
 *
 ******************************************************************************/
import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../core/services/notes/notes.service'
import { Note } from '../../core/model/user-model'
@Component({
  selector: 'app-allnote',
  templateUrl: './allnote.component.html',
  styleUrls: ['./allnote.component.scss']
})
export class AllnoteComponent implements OnInit {
  private notes:Note[]=[];
  private arr=[];
  constructor( private noteService : NotesService) { }
  ngOnInit() {
     this.getNotes();
    }
  getNotes(){
    this.noteService.getNoteList()
    .subscribe((response:any) =>{
      this.notes=response.data.data
      // console.log("SCCCCCCCCCCCCCCCCCCCCCCC=====>", response.data.data);
      this.arr=[];
      for(let i=this.notes.length; i>0 ; i--){
      let a=this.notes[i-1];
      return this.arr.push(a);
     }
    },(error) =>{
    });
  }
}