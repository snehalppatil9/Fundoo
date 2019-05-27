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

  changeText: boolean;

  constructor(
    private note: NotesService,
    private snackbar: MatSnackBar,
    private router: Router,
    private dialogRef: MatDialogRef<NavbarComponent>
  ) {
    this.changeText = false;
  }

  ngOnInit() {
    /* Show label*/
    this.showLabel();
  }

  /**
   * @purpose : Add Label
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
      this.note.addLabel(body).pipe(takeUntil(this.destroy$))
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
   * @Purpose  : Getting label data 
   */
  showLabel() {
    this.note.showNoteLabel()
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
   * @Purpose : ShowLabel in sideNavbar
   **/
  add() {
    this.done();
    this.dialogRef.close();
  }

  /**
   * @Purpose  : Clear Label 
   */
  clear() {
    this.labels.label = null;
  }

  /**
   * @Purpose  : Delete Label 
   */
  deleteLabel(labelId) {
    this.note.deleteNoteLabel(labelId)
     .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        console.log("deleteLabel response ===>", response);
        this.showLabel();
      }, (error) => {
        console.log("deleteLabel error ===>", error);
      });
      }

  /**
   * @Purpose  : Edit Label 
   */
  editLabel(labelId) {
    let label = this.model.newName;
    let body = {
      "label": label
    }
    this.note.updateNoteLabel(labelId, body)
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
