import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogcartComponent } from '../dialogcart/dialogcart.component';
@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.scss']
})
export class AddcartComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialogAdvance(): void {
    const dialogRef = this.dialog.open(DialogcartComponent, {
      width: '850px',
      height : '300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
  }

}

