/******************************************************************************
 *  Execution       :   1. default node         cmd> navbar.component.ts
 *
 *  Purpose         : To print the navigation and side navigation bar
 *
 *  @file           : navbar.component.ts
 *  @author         : Snehal Patil
 *  @version        : 1.0
 *  @since          : 28-04-2019
 *
 ******************************************************************************/
import { Component, OnInit } from '@angular/core';
import { LabelComponent } from '../label/label.component';
import { NotesService } from '../../core/services/notes/notes.service'
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DataService } from '../../core/services/data/data.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Label } from '../../core/model/user-model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  labelName: string;
  gridView: boolean = true;
  signoutCard: boolean = false;
  firstName = localStorage.getItem("Firstname");
  lastName = localStorage.getItem("Lastname");
  email = localStorage.getItem("Email");
  searchValue: any;
  label: Label[] = [];
  private labelList = [];
  /*Grid*/
  list: boolean = true;
  grid: boolean = false;
  view: any;
  direction: string;

  constructor(private dialog: MatDialog, private noteService: NotesService, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.labelName = "Fundoo";
    this.showLabel();
    /*For gridView and ListView*/
    this.dataService.getView().subscribe((response) => {
      this.view = response;
      this.direction = this.view.data;
    });
  }
  /**
   * @description displaying the sidenavbar notes button functunality
   */
  addNote() {
    this.labelName = "Notes";
    this.dataService.allNote.subscribe((response) => {
      console.log("response of Notes sidenav bar ======>", response);
    });
  }
  /**
  * @description displaying the sidenavbar reminder button functunality
  */
  reminder() {
    this.labelName = "Reminder";
  }
  /**
  * @description displaying the sidenavbar Archive button functunality
  **/
  archive() {
    this.labelName = "Archive";
  }

  /**
   *  @description displaying the sidenavbar Trash button functunality
   **/
  trash() {
    this.labelName = "Trash";
  }
  /**
  * @description displaying the signout card
  */
  account() {
    this.signoutCard = !(this.signoutCard);
  }
  /**
  * @description :  add account
  */
  addAccount() {
    localStorage.removeItem("token");
    localStorage.removeItem("Id");
    localStorage.removeItem("Firstname");
    localStorage.removeItem("Lastname");
    localStorage.removeItem("Email");
    this.router.navigateByUrl('/login');
  }
  /**
  * @description :  for logout from fundoo account
  */
  logout() {
    this.noteService.logout()
      .subscribe((response) => {
        localStorage.removeItem("token");
        localStorage.removeItem("Id");
        localStorage.removeItem("Firstname");
        localStorage.removeItem("Lastname");
        localStorage.removeItem("Email");
        this.router.navigate(['/login']);
      }, (error) => {
      });
  }
  /**
  * @description :  Grid and List View
  */
  View() {
    if (this.list) {
      this.grid = true;
      this.list = false;
    } else {
      this.list = true;
      this.grid = false;
    }
    this.dataService.gridView();
  }
  /**
  * @description :  Create Label 
  */
  createLabel() {
    this.labelName = "Labels";
    const dialogRef = this.dialog.open(LabelComponent, {
      width: '430px',
      height: '250px'
    });
    dialogRef.afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe(result => {
        this.showLabel();
      })
  }
  showLabel() {
    this.noteService.showNoteLabel()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.label = response["data"].details;
        this.labelList = [];
        for (let i = 0; i < this.label.length; i++) {
          this.labelList.push(this.label[i].label);
        }
      })
  }
  /*
  * @description :  for refresh of page
  */
  refresh() {
    this.router.navigateByUrl('/addnote');
  }
  /*
  * @description :  for search note
  */
  search() {
    this.router.navigateByUrl('/search');
  }
  /*
  * @description :  for search note
  */
  newMessage() {
    this.dataService.MessageSearch(this.searchValue)
  }

}
