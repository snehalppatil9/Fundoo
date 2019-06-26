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
  constructor(private route: ActivatedRoute,private noteService : NotesService,private router : Router) { }

  ngOnInit() {
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: Params) => {
        this.dataId = params['data'];
        console.log("dataId=====>",this.dataId);
        this.getCartDetails(this.dataId);
      })
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
    this.router.navigateByUrl('placeorder/'+this.dataId);
  }
}
