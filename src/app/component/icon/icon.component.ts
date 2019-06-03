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
import { Subject } from 'rxjs';
import { CollaboratorComponent } from '../collaborator/collaborator.component'
import { Label } from '../../core/model/user-model';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {

  destroy$: Subject<boolean> = new Subject<boolean>();
  message: String
  /**
   * @description : change date variables
   */
  currentDate = new Date();
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  isArchive = true;
  @Input() card;
  labelArray = [];
  Array = [];
  @Output() onChangeColor = new EventEmitter()
  @Output() onChangeDelete = new EventEmitter()
  @Output() onChangeDate = new EventEmitter()
  @Output() onArchiveEntry = new EventEmitter()
  @Output() onChangeaddlabeltonotes= new EventEmitter()
  @Output() popupChange = new EventEmitter();
  constructor(private dialog: MatDialog, private noteService: NotesService, private dataService: DataService, private snackBar: MatSnackBar) {

  }
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
    this.showLabel();
    this.dataService.currentMessageSearch
    .pipe(takeUntil(this.destroy$))
      .subscribe(message => {
        this.message = message;
      })
  }
  setColor(color) {
    this.onChangeColor.emit(color);
  }
  deleteNotes(note) {
    this.onChangeDelete.emit(note);
  }
  /**
   * @description : Remind today date
   */
  today() {
    let date = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate() + 0, 8, 0, 0);
    console.log("@@@@@@@@@@@@@@@@@@@@@@@", date);
    this.onChangeDate.emit(date);
    console.log("sfdsdf", this.onChangeDate.emit(date));
  }
  /**
   * @description : Remind tomorrow date
   */
  tomorrow() {
    let date = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate() + 1, 8, 0, 0);
    console.log("@@@@@@@@@@@@@@@@@@@@@@@", date);
    this.onChangeDate.emit(date);
    console.log("sfdsdf", this.onChangeDate.emit(date));
  }
  /**
   * @description : Remind nextweek date
   */
  nextweek() {
    let date = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), this.currentDate.getDate() + 7, 8, 0, 0);
    console.log("@@@@@@@@@@@@@@@@@@@@@@@", date);
    this.onChangeDate.emit(date);
    console.log("sfdsdf", this.onChangeDate.emit(date));
  }
  archive(note) {
    this.onArchiveEntry.emit(note);
  }

  /* addCollaborator */
  addCollaborator() {
    const dialogRef = this.dialog.open(CollaboratorComponent, {

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed');
    });
  }
  label: Label[] = [];
  private labelList = [];

  addLabel(label){
    if(this.card){
      this.noteService.addLabelToNotes(this.card.id,label.id)
       .subscribe((response) => {
         this.onChangeaddlabeltonotes.emit({});
        console.log("adsdasdasdasdasdsa");
        
      },
      error=>{
        console.log("error in add label to notes");
        
      });
    }
  }



   /**
   * 
   * @description getting label list
   */
  showLabel() {
    this.labelArray = [];
    this.Array = [];
    this.noteService.showNoteLabels()
      .subscribe((response) => {
        this.label = response["data"].details;
        this.labelList = [];
        this.labelList = this.label;
        for (let i = 0; i < this.labelList.length; i++) {
          this.labelList[i].isChecked = false;
          if (this.card) {
            for (let j = 0; j < this.card.noteLabels.length; j++) {
              if (this.labelList[i].label == this.card.noteLabels[j].label) {
                this.Array.push(this.labelList[i])
                this.labelList[i].isChecked = true;
              }
            }
          }
        }
      }, (error) => {
        console.log("error in show label");
        
      });
  }


   /**
   * 
   * @description remove label from list
   */
  removeLabel(label) {
    this.noteService.removeLabelFromNotes(this.card.id, label.id)
      .subscribe((response) => {
        this.onChangeaddlabeltonotes.emit({})
        for (let i = 0; i < this.Array.length; i++) {
          if (this.Array[i].id == label.id) {
            this.Array.splice(i, 1);
            this.popupChange.emit(this.Array)
            return;
          }
        }
        this.Array.push(label);
        this.popupChange.emit(this.Array)
      }, (error) => {
      });
  }

   /*
  * @description :  for search label
  */
 searchLabel : any;
 newMessage() {
  this.dataService.MessageSearch(this.searchLabel);
}
}
