import { Component, OnInit, Inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AddcartComponent } from '../addcart/addcart.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NotesService } from 'src/app/core/services/notes/notes.service';
@Component({
  selector: 'app-dialogcart',
  templateUrl: './dialogcart.component.html',
  styleUrls: ['./dialogcart.component.scss']
})
export class DialogcartComponent implements OnInit {
  // @Input() dataService1;
  dataService: [];
  constructor(private router: Router,
    private noteService: NotesService,
    private dialogRef: MatDialogRef<AddcartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
  service: '';
  productId: '';
  ngOnInit() {
    this.dataService = this.data["data"];
    console.log("dataservice id in dialog box=====>", this.dataService["id"]);

    var body = {
      "productId": this.dataService["id"]
    }
    console.log('hhhhhhhhhhhhhhhhhh',body);

    this.noteService.productCarts(body)
      .subscribe((response) => {
        this.service = response["data"].details;
        console.log("get dialog note Data ===============>", this.service);
        this.productId = this.service['id'];
        console.log("get dialog note productId ===============>", this.productId);
      }, (error) => {
      });
    console.log("dataaaaaaaaaaaaaaaaaaaa======>", this.dataService);

  }
  // /productcarts/addToCart

  proceedto() {
    this.dialogRef.close();
    this.router.navigateByUrl('register/'+this.productId);
  }
}
