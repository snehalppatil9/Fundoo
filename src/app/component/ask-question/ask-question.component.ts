import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent implements OnInit {
  editorContent = new FormControl('');
  constructor() { }

  ngOnInit() {
  }
  public options: Object = {
    placeholderText: 'Type Something........',
    charCounterCount: false
  }


}
