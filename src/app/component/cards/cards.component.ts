import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NotesService } from '../../core/services/notes/notes.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CardDisplayComponent } from '../card-display/card-display.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  private noteData:object;
  constructor(private noteService : NotesService,private snackbar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit() {
  }
    /**
  * 
  * @description opening the particular note
  */
 openDialog(noteData1): void {
  const dialogRef = this.dialog.open(CardDisplayComponent, {
    width: '600px',
    data: { noteData : noteData1 }
  });
 }
}