import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotesService } from '../../core/services/notes/notes.service'
@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  label : any={
    "labelName" : ""
  }
  labelList=[];
  id=localStorage.getItem('token');
  constructor(private noteService: NotesService, private snackbar: MatSnackBar) { }

  ngOnInit() { }
  clear(){
    this.label.labelName=null;
  }
  /**
  * 
  * @description adding a label to list
  */
addLabel() {
  let label=this.label.labelName;
  var body = {
    "label": "string",
    "isDeleted": true,
    "userId": "id"
  }
  console.log('add note data......', body);
  try {

    this.noteService.createLabel(body).subscribe(
      data => {
        this.label.labelName=null;
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
}
