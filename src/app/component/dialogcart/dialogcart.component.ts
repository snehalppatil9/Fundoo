import { Component, OnInit, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AddcartComponent } from '../addcart/addcart.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
@Component({
  selector: 'app-dialogcart',
  templateUrl: './dialogcart.component.html',
  styleUrls: ['./dialogcart.component.scss']
})
export class DialogcartComponent implements OnInit {
  // @Input() dataService1;
  dataService:[];
  constructor(private router: Router,
    private dialogRef: MatDialogRef<AddcartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) { }

  ngOnInit() {
    this.dataService = this.data["data"];
    console.log("data======>",this.dataService);
    
  }
  proceedto(dataService1){
    this.dialogRef.close();
    this.router.navigateByUrl('register/'+dataService1);
  }
}
