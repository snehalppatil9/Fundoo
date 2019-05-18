import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from '../../core/services/notes/notes.service'
import { Label } from '../../core/model/user-model'
@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  label: any = {
    "labelName": ""
  }
  id = localStorage.getItem('token');
  label1: Label[] = [];
  
  constructor(private noteService: NotesService, private snackbar: MatSnackBar) { 
    console.log("@@@@@@@@@@@@@@@@",this.label1);
    
  }

  ngOnInit() {
    this.showLabel();
   }
  clear() {
    this.label.labelName = null;
  }
  /**
  * 
  * @description adding a label to list
  */
  addLabel() {
    let label = this.label.labelName;
    console.log("@@@@@@@@@@@@@@@@@@@@@@",label);
    
    var body = {
      "label": this.label.labelName,
      "isDeleted": true,
      "userId": "id"
    }
    console.log('add note data......', body);
    try {
      this.noteService.createLabel(body).subscribe(
        data => {
          // this.label.labelName = null;
          this.snackbar.open('Label added successfully.', '', { duration: 3000 });
          console.log('add note data..........', data);
        },
        error => {
          this.snackbar.open('Error while adding Label!', 'Error', { duration: 3000 });
          console.log("Error something wrong: ", error)
        });

    } catch (error) {
      this.snackbar.open('error', "", { duration: 3000 });
    }
  }
  /*
   * @Description  : Getting label data 
   */
  showLabel() {
    this.noteService.showNoteLabels()
      .subscribe((response: any) => {
        this.label1 = response.data.details
        console.log("SCCCCCCCCCCCCCCCCCCCCCCC=====>", response);
      }, (error) => {
      });
  }
}
