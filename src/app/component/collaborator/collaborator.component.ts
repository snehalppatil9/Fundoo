import { Component, OnInit, Input, Inject } from '@angular/core';
import { Collaborator } from '../../core/model/user-model'
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { NotesService } from '../../core/services/notes/notes.service';
import { MatSnackBar, MatCard } from '@angular/material';
import { DataService } from 'src/app/core/services/data/data.service';
import { UserService }  from '../../core/services/user/user.service';
import { Note } from '../../core/model/user-model';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  searchValue: any;
  notes : Note[]=[];
  userList: any[];
  collab = new Collaborator();
  //@Input() noteData;
  constructor( private snackbar : MatSnackBar,private noteService : NotesService, private dataService : DataService,@Inject(MAT_DIALOG_DATA) 
  public data: any, private dialog : MatDialog, private userService : UserService ) { }
  firstName = localStorage.getItem("Firstname");
  lastName = localStorage.getItem("Lastname");
  email = localStorage.getItem("Email");
  destroy$: Subject<boolean> = new Subject<boolean>();
  collaborators=this.data.collaborators
  id=this.data.id
  ngOnInit() {
    this.dataService.allNote
    .pipe(takeUntil(this.destroy$))
    .subscribe(data => {
      this.notes = data
      this.notes = this.notes.filter(function (el) {
        return (el.isArchived === false && el.isDeleted === false);
        });
      });
  console.log('all note data  ==================>', this.notes);
  

  }
  cancel(){
    this.dialog.closeAll();
  }
  clearbutton(){
    this.collab.firstName ==null;
    this.collab.lastName ==null;
    this.collab.email ==null;
  }
    /** 
    * 
    * @description : Search User list
    */
   callboratorData: any[];
  searchUser(){
    let searchWord= {
      'searchWord':this.searchValue
    }
    this.userService.searchUserList(searchWord)
    .subscribe((response)=>{
      this.userList = [];
      this.userList = response['data'].details;
      console.log("Search user list===>",this.userList);
    }, (error)=>{
      console.log(error);
    });
  }
    /** 
    * 
    * @description : Add collaborator 
    */
  addCol(id:any){
    console.log("iddddd",id);
    console.log("Add collaborators Notes data === >",id);
   // console.log("data.isd=====================>",this.data.noteData['id']);
    this.callboratorData = this.userList[0];
    // this.callboratorData = this.userList[data[0]];
    console.log("this.collaboratordata",this.callboratorData);
    try {
      this.noteService.addColNote(this.callboratorData,id)
      .subscribe(
        data => {
          this.snackbar.open('Note added successfully......!', 'Done...!', { duration: 3000 });
          console.log('Register infor ==========>', data);
        },
        error => {
          this.snackbar.open('Error while adding note......!', 'Error', { duration: 3000 });
          console.log("Error something wrong: ", error)
        });

    } catch (error) {
      this.snackbar.open('error', "", { duration: 3000 });
    }
    setTimeout(() => this.dataService.getAllNote(), 100);
  }

}
