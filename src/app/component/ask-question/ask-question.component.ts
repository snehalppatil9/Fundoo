import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Params, ActivatedRoute } from '@angular/router';
import { Editor, Note } from '../../core/model/user-model'
import { NotesService } from 'src/app/core/services/notes/notes.service';
import { MatSnackBar } from '@angular/material';
import { DataService } from 'src/app/core/services/data/data.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  showfroalaeditor: boolean = true;
  showfroalaeditor1 : boolean = true;
  message = new FormControl('');
  @Input() id;
  noteId: '';
  addMsg: Editor = new Editor();
  constructor(private route: ActivatedRoute,
    private noteService: NotesService,
    private snackbar: MatSnackBar,
    private dataService: DataService
  ) { }
  openEditor() {
    this.showfroalaeditor = !this.showfroalaeditor;
  }
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.noteId = params['id'];
      console.log("this.noteId in ask question================>", this.noteId);
    })
    this.getNotesDetail();
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
    setTimeout(() => this.dataService.getAllNote(), 30);
    this.addMsg.message = null;
    this.showfroalaeditor1= !this.showfroalaeditor1;
  }
  notes: Note[] = [];
  noteDataList=[];
  
  getNotesDetail() {
    this.noteService.getNotesDetail(this.noteId)
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.notes = data["data"].data;
       console.log("data in get notelist ask question=========>", this.noteDataList);
        this.snackbar.open('Notes Detail.', '', { duration: 3000 });
        console.log('Notes Detail data..........', data);
      },
        error => {
          this.snackbar.open('Error while Notes Detail!', 'Error', { duration: 3000 });
          console.log("Error something wrong: ", error)
        });
  }

}
