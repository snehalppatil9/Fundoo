import { Component, OnInit } from '@angular/core';
import { Collaborator } from '../../core/model/user-model'
import { MatDialog } from '@angular/material';
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
  data: any;
  constructor( private snackbar : MatSnackBar,private noteService : NotesService, private dataService : DataService, private dialog : MatDialog, private userService : UserService ) { }
  firstName = localStorage.getItem("Firstname");
  lastName = localStorage.getItem("Lastname");
  email = localStorage.getItem("Email");
  destroy$: Subject<boolean> = new Subject<boolean>();
  private collaborators=[];
  ngOnInit() {
    this.dataService.allNote
    .pipe(takeUntil(this.destroy$))
    .subscribe(data => {
      this.notes = data
      this.notes = this.notes.filter(function (el) {
        return (el.isArchived === false && el.isDeleted === false);
        });
      });
  console.log('all note data collabrators ==================>', this.notes);
  

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
  callboratorData:[];
  // addColll
  addCol(data){
    console.log("AddcollaboratorsNotes data === >",data);
    this.callboratorData = data[0];
    console.log("this.collaboratordata",this.callboratorData);
    
    const body ={
      'firstName': this.collab.firstName,
      'lastName': this.collab.lastName,
      'email':this.collab.email,
      'noteId': [data.id],
      'userId': this.collab.id
    }
    console.log('console for updateNote =======================>', body);
    try {
      this.noteService.addColNote(body).subscribe(
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
