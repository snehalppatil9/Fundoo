import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Params, ActivatedRoute } from '@angular/router';
import { Editor } from '../../core/model/user-model'
import { NotesService } from 'src/app/core/services/notes/notes.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent implements OnInit {
  message = new FormControl('');
  @Input() id;
  noteId: '';
  addMsg: Editor = new Editor();
  constructor(private route: ActivatedRoute,
    private noteService: NotesService,
    private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.noteId = params['id'];
      console.log("this.noteId in ask question================>", this.noteId);
    })

  }
  addMessage() {
    var body = {
      "message": this.addMsg.message,
      "notesId": this.noteId
    }
    console.log('add Message data============>', body);
    try {
      this.noteService.addMessageQA(body).subscribe(
        data => {
          this.snackbar.open('Message added successfully.', '', { duration: 3000 });
          console.log('Add Message data..........', data);

        },
        error => {
          this.snackbar.open('Error while adding Message!', 'Error', { duration: 3000 });
          console.log("Error something wrong: ", error)
        });
    } catch (error) {
      this.snackbar.open('error', "", { duration: 3000 });
    }
  }

}
