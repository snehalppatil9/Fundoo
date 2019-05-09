import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  private noteCard:boolean=true;    
  
  constructor() { }

  ngOnInit() {
   
     }
  /**
  * 
  * @description opening the notecard for adding
  */
  noteCardOpen(){
    this.noteCard=!(this.noteCard);
   
  }
  }




