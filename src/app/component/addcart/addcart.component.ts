import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogcartComponent } from '../dialogcart/dialogcart.component';
import { NotesService } from 'src/app/core/services/notes/notes.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Service } from '../../core/model/user-model'
import { Router } from '@angular/router';
@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.scss']
})
export class AddcartComponent implements OnInit {
  @Input() data;
  constructor(public dialog: MatDialog, private noteService: NotesService, public router: Router) { }
  id = localStorage.getItem('Id');
  ngOnInit() {
    if (this.id != null) {
      this.router.navigateByUrl('/addnote');
    }
    this.getService();
  }
  openDialogAdvance(data): void {
    const dialogRef = this.dialog.open(DialogcartComponent, {
      width: '850px',
      height: '350px',
      data: {
        data: data,
      }
    });
    dialogRef.afterClosed()
      .subscribe(result => {
        console.log('The dialog was closed');

      });
  }
  service: Service[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  getService() {
    this.noteService.getService()
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.service = response["data"].data;
        console.log("get addcart details note ===============>", this.service);

      }, (error) => {
      });
  }
}

