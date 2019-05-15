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
  signoutCard:boolean=false;
  constructor(private dialog : MatDialog,private noteService : NotesService,private router: Router) { }

  ngOnInit() {
    
  }
/**
  * 
  * @description for logging out from account
  */
 logout(){
  this.noteService.logout()
  .subscribe((response) =>{
    localStorage.removeItem("token");
    this.router.navigate(['/login']);
  },(error) => {
  });
}

  view(){
    this.gridView=!this.gridView;
  }
   createLabel(): void {
   this.dialog.open(LabelComponent, {
      width: '400px',
    });

  }
  
}
