/******************************************************************************
 *  Execution       :   1. default node         cmd> icon.component.ts
 *
 *  Purpose         : To print icons
 *
 *  @file           : icon.component.ts
 *  @author         : Snehal Patil
 *  @version        : 1.0
 *  @since          : 28-04-2019
 *
 ******************************************************************************/
import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../core/services/notes/notes.service'
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  
  constructor(private noteService : NotesService) { }

  ngOnInit() {
  }
 
}
