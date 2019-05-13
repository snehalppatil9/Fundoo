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

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showFiller = false;
  constructor() { }

  ngOnInit() {
  }
}
