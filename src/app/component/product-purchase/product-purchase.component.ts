import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Service } from '../../core/model/user-model';
import { NotesService } from 'src/app/core/services/notes/notes.service';

@Component({
  selector: 'app-product-purchase',
  templateUrl: './product-purchase.component.html',
  styleUrls: ['./product-purchase.component.scss']
})
export class ProductPurchaseComponent implements OnInit {
  destroy$ : Subject<boolean> = new Subject<boolean>();
  dataId : '';
  cardId = localStorage.getItem("cardId");
  constructor(private route: ActivatedRoute,private noteService : NotesService,private router : Router) { }

  ngOnInit() {
    this.getCartDetails(this.cardId);
  }
  productData = '';
  service: any;
  getCartDetails(cardId) {
    this.noteService.getCartDetails(cardId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.service = response["data"];
        console.log("get purchase note data for sevice ===============>", this.service);
        this.productData = this.service["product"];
        console.log("get purchase product data for sevice ===============>", this.productData);
      }, (error) => {
      });
  }
  toCheckOut(){
    this.router.navigateByUrl('placeorder');
  }
}
