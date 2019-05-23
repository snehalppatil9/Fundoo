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
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2020, 0, 1);
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  @Input() card;
  @Output() onChangeColor = new EventEmitter()
  @Output() onChangeDelete = new EventEmitter()
  constructor(private dialog: MatDialog) { }
  colorsArray = [
    [
      { name: "white", hexcode: "#FFFFFF" },
      { name: "salmon", hexcode: "#fa8072" },
      { name: "orange", hexcode: "#FFA500" },
      { name: "yellow", hexcode: "#FFFF00" },
    ],

    [
      { name: "green", hexcode: "#008000" },
      { name: "teal", hexcode: "#008080" },
      { name: "blue", hexcode: "#0000FF" },
      { name: "aqua", hexcode: "#00FFFF" },
    ],

    [
      { name: "purple", hexcode: "#800080" },
      { name: "pink", hexcode: "#FFC0CB" },
      { name: "red", hexcode: "#FF0000" },
      { name: "gray", hexcode: "#808080" },

    ]
  ]
  ngOnInit() {
  }
  setColor(color) {
    this.onChangeColor.emit(color);
  }
  deleteNotes(note) {
    this.onChangeDelete.emit(note);
  }
}
