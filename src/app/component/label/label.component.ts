import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from '../../core/services/notes/notes.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { Label } from '../../core/model/user-model';
import { DataService } from '../../core/services/data/data.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {MatDialogRef} from "@angular/material";
@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  label: any = {
    "labelName": '',
    "newName": ""
  }
  id = localStorage.getItem('Id');
  changeText: boolean;
  label1: Label[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  private labelList = []
  constructor(private noteService: NotesService, private dataService: DataService, private snackbar: MatSnackBar, private dialogRef : MatDialogRef<NavbarComponent>) {
    console.log("@@@@@@@@@@@@@@@@", this.label1);
  }
  ngOnInit() {
    this.showLabel();
  }
  clear() {
    this.label.labelName = null;
  }
  //   /**
  //  * @Purpose  : Delete Label 
  //  */
  // deleteLabel(labelId)
  // {
  //   this.noteService.deleteNoteLabel(labelId)
  //   .pipe(takeUntil(this.destroy$))
  //     .subscribe((response) => {
  //       console.log("deleteLabel response ===>", response);
  //       this.showLabel();
  //     }, (error) => {
  //       console.log("deleteLabel error ===>", error);
  //     });
  // }
   /**
   * @Purpose  : Edit Label 
   */
  editLabel(labelId) {
    let label = this.label.newName;
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
    this.label.newName = labelName
  }

  /*
   * @Description  : Getting label data 
   */
  showLabel() {
    this.noteService.showNoteLabel()
    .pipe(takeUntil(this.destroy$))
      .subscribe((response: any) => {
        this.label1 = response.data.details
        this.labelList=[];
        // this.labelList = this.label1;
        console.log("check showLabel=====>", response);
      }, (error) => {
      });
  }
  done() {
  var body = {
      "label": this.label.label,
      "isDeleted": false,
      "userId": this.id
    }
    const label = this.label.label
    if (label == " ") {
      this.dialogRef.close();
      return false;
    }
    console.log('Data after edit label', body);
    try {
      this.noteService.addLabel(body)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (response) => {
          console.log("Response ====>", response);
          this.showLabel();
          // this.snackbar.open('Label created successfully..', '', { duration: 3000 });
          // console.log('Label created successfully..');
        },
        error => {
          console.log("Data ====>", error);
          // this.snackbar.open('Error while creating lable..', '', { duration: 3000 });
          // console.log('Error while creating lable..');
        }
      )
    } catch (err) {
      console.log("Error", err);
    }
  }
  /**
   * @Purpose : ShowLabel in sideNavbar
   **/ 
  addLabel(){
    this.done();
    this.dialogRef.close();
  }
}
