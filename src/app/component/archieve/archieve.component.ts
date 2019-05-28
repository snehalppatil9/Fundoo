import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { NotesService } from '../../core/services/notes/notes.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Note } from '../../core/model/user-model'
import { MatSnackBar, MatCard } from '@angular/material';
import { DataService } from 'src/app/core/services/data/data.service';
@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.scss']
})
export class ArchieveComponent implements OnInit {
  destory$: Subject<boolean> = new Subject<boolean>();
  notes: Note[] = [];
  archive: any;
  @Output() onChangeColor = new EventEmitter();
  setColor: any;
  isArchived : false;
  constructor(private noteService: NotesService,private snackbar: MatSnackBar,private dataService : DataService) { }
  ngOnInit() {
    this.getArchiveList();
  }
  /** 
    * 
    * @description getting the archieved note list
    */
  getArchiveList() {
    this.noteService.getArchivedList()
      .pipe(takeUntil(this.destory$))
      .subscribe((response) => {
        this.notes = response["data"].data;
        console.log("get archive note ===============>", this.notes);

      }, (error) => {
      });
  }

   /**
   * @description : change note Color 
   */
  
  changeColor(data,$event) {
    this.setColor = $event;
    var body = {
      "color": this.setColor,
      "noteIdList": [data.id]
    }
    console.log('color change data......', body);
    try {
      this.noteService.changeColor(body).subscribe(
        data => {
          this.snackbar.open('color change successfully.', '', { duration: 3000 });
          console.log('color change successfully..........', data);
        },
        error => {
          this.snackbar.open('Error while color change!', 'Error', { duration: 3000 });
          console.log("Error something wrong: ", error)
        });
    } catch (error) {
      this.snackbar.open('error', "", { duration: 3000 });
    }
    setTimeout(() => this.dataService.getAllNote(), 30);
  }

   /**
  * @description : Archive Note
  */
 archiveNote(data, $event) {
  this.archive = $event;
  var body = {
    "isArchived": !this.isArchived,
    "noteIdList": [data.id]
  }
  console.log('#########Archive Note###########', body);
  try {
    this.noteService.archiveNote(body).subscribe(
      data => {
        this.snackbar.open('Archive Note Successfully.', '', { duration: 3000 });
        console.log('Archive Note successfully..........', data);
      },
      error => {
        this.snackbar.open('Error while Archive Note!', 'Error', { duration: 3000 });
        console.log("Error something wrong: ", error)
      });
  } catch (error) {
    this.snackbar.open('error', "", { duration: 3000 });
  }
  setTimeout(() => this.dataService.getAllNote(), 30);
}
}
