/******************************************************************************
 *  Execution       :   1. default node         cmd> icon.component.ts
 *
 *  Purpose         : To print icons
 *
 *  @file           : icon.component.ts
 *  @author         : Snehal Patil
 *  @version        : 1.0
 *  @since          : 28-04-2019
 *
 ******************************************************************************/
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NotesService } from '../../core/services/notes/notes.service';
import { MatSnackBar, MatCard } from '@angular/material';
import { DataService } from 'src/app/core/services/data/data.service';
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  private currentDate=new Date();
  @Input() card;
  @Output() onChangeColor = new EventEmitter()
  @Output() onChangeDelete = new EventEmitter()
  @Output() onChangeDate = new EventEmitter()
  constructor(private dialog: MatDialog ,private noteService: NotesService, private snackbar: MatSnackBar,private dataService : DataService) { }
  colorsArray = [
    [
      { name: "white", hexcode: "#FFFFFF" },
      { name: "salmon", hexcode: "#fa8072" },
      { name: "orange", hexcode: "#FFA500" },
      { name: "yellow", hexcode: "#FFFF00" },
    ],

    [
      { name: "green", hexcode: "#008000" },
      { name: "teal", hexcode: "#008080" },
      { name: "blue", hexcode: "#0000FF" },
      { name: "aqua", hexcode: "#00FFFF" },
    ],

    [
      { name: "purple", hexcode: "#800080" },
      { name: "pink", hexcode: "#FFC0CB" },
      { name: "red", hexcode: "#FF0000" },
      { name: "gray", hexcode: "#808080" },

    ]
  ]
  ngOnInit() {
  }
  setColor(color) {
    this.onChangeColor.emit(color);
  }
  deleteNotes(note) {
    this.onChangeDelete.emit(note);
  }
  today(){
    let date=new Date(this.currentDate.getFullYear(),this.currentDate.getMonth(),this.currentDate.getDate()+0,20,0,0);
    console.log("@@@@@@@@@@@@@@@@@@@@@@@",date);
   this.addReminder(date);
   this.onChangeDate.emit(date);
  }
  addReminder(date){
    let id=[];
    id.push(this.card.id);
    var body = {
       "reminder": date,
       "noteIdList": id
     }
     console.log('Add update Reminder......', body);
     try {
       this.noteService.addUpdateReminder(body).subscribe(
         data => {
          this.onChangeDate.emit({"body":date})
           this.snackbar.open('Add update Reminder Successfully.', '', { duration: 3000 });
           console.log('Add update Reminder successfully..........', data);
         },
         error => {
           this.snackbar.open('Error while Add update Reminder!', 'Error', { duration: 3000 });
           console.log("Error something wrong: ", error)
         });
     } catch (error) {
       this.snackbar.open('error', "", { duration: 3000 });
     }
      setTimeout(() => this.dataService.getReminderNotesList(), 30);
  }
}
