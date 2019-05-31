import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchmatcards',
  templateUrl: './searchmatcards.component.html',
  styleUrls: ['./searchmatcards.component.scss']
})
export class SearchmatcardsComponent implements OnInit {

  constructor() { }
  colorsArray = [
    [
      { name: "white", hexcode: "#FFFFFF" },
      { name: "salmon", hexcode: "#fa8072" },
      { name: "orange", hexcode: "#FFA500" },
      { name: "yellow", hexcode: "#FFFF00" },
      { name: "green", hexcode: "#008000" },
      { name: "teal", hexcode: "#008080" },
      { name: "blue", hexcode: "#0000FF" },
      { name: "aqua", hexcode: "#00FFFF" },
      { name: "purple", hexcode: "#800080" },
      { name: "pink", hexcode: "#FFC0CB" },
      { name: "red", hexcode: "#FF0000" },
      { name: "gray", hexcode: "#808080" },
    ]
  ]
  ngOnInit() {
  }

}
