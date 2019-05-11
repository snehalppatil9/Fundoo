import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-display',
  templateUrl: './card-display.component.html',
  styleUrls: ['./card-display.component.scss']
})
export class CardDisplayComponent implements OnInit {
  private checkList=[];
  constructor() { }

  ngOnInit() {
   // this.checkList=this.data.noteData["noteCheckLists"];
  }

}
