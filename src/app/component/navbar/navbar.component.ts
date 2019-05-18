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

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  gridView: boolean = true;
  signoutCard: boolean = false;
  firstName = localStorage.getItem("Firstname");
  lastName = localStorage.getItem("Lastname");
  email = localStorage.getItem("Email");
  
  constructor(private dialog: MatDialog, private noteService: NotesService, private router: Router) { }

  ngOnInit() {
   
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
  view() {
    this.gridView = !this.gridView;
  }
  /**
  * @description :  Add Label 
  */
  createLabel(): void {
   this.dialog.open(LabelComponent, {
      width: '400px',
    });
  }
   /*
  * @description for refresh of page
  */
  refresh() {
    this.router.navigateByUrl('/addnote');
  }

}
