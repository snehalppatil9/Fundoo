import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from '../../core/services/notes/notes.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { Label } from '../../core/model/user-model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {MatDialogRef} from "@angular/material";
import { Router } from '@angular/router';
@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {

  destroy$: Subject<boolean> = new Subject<boolean>();

  /* Label Model*/
  labels: Label = new Label();
  private labelList = []
  public model: any = {
    "labelName": "",
    "newName": ""
  }
  /* Get Id from localstorage*/
  id = localStorage.getItem('Id');
  changeText1:boolean;
  changeText: boolean;
  constructor(
    private noteService: NotesService,
    private snackbar: MatSnackBar,
    private router: Router,
    private dialogRef: MatDialogRef<NavbarComponent>
  ) {
    this.changeText = false;
    this.changeText1 =false;
   }

  ngOnInit() {
    /* Show label*/
    this.showLabel();
  }

  /**
   * @description  :   Add Label
   **/
  done() {
    var body = {
      "label": this.labels.label,
      "isDeleted": false,
      "userId": this.id
    }
    const label = this.labels.label
    if (label == " ") {
      this.dialogRef.close();
      return false;
    }
    console.log('Data after edit label', body);
    try {
      this.noteService.addLabel(body).pipe(takeUntil(this.destroy$))
        .subscribe(
          (response) => {
            console.log("Response ====>", response);
            this.showLabel();
          },
          error => {
            console.log("Data ====>", error);
          }
        )
    } catch (err) {
      console.log("Error", err);
    }
  }

  /**
   * @description  :  Getting label data 
   */
  showLabel() {
    this.noteService.showNoteLabel()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response: any) => {
        this.labels = response.data.details
        this.labelList = [];
        console.log("check showLabel=====>", response);
      }, (error) => {
        console.log("Data ====>", error);
      });
  }

  /**
   * @description  :  ShowLabel in sideNavbar
   **/
  add() {
    this.done();
    this.dialogRef.close();
  }

  /**
   * @description  :  Clear Label 
   */
  clear() {
    this.labels.label = null;
    this.changeText1=true;
  }

  /**
   * @description  :  Delete Label 
   */
  deleteLabel(labelId) {
    this.noteService.deleteNoteLabel(labelId)
     .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        console.log("deleteLabel response ===>", response);
        this.showLabel();
      }, (error) => {
        console.log("deleteLabel error ===>", error);
      });
      }

  /**
   * @description  :  Edit Label 
   */
  editLabel(labelId) {
    let label = this.model.newName;
    let body = {
      "label": label
    }
    this.noteService.updateNoteLabel(labelId, body)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        console.log("deleteLabel response ===>", response);
        this.dialogRef.close();
      }, (error) => {
        console.log("deleteLabel error ===>", error);
      });
  }

  /* Open and Close editIcon*/ 
  private labelId
  editIcon(id, labelName) {
    this.labelId = [];
    this.labelId = id;
    this.model.newName = labelName
  }

}
