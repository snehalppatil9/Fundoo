import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NotesService } from 'src/app/core/services/notes/notes.service';

@Component({
  selector: 'app-product-purchase',
  templateUrl: './product-purchase.component.html',
  styleUrls: ['./product-purchase.component.scss']
})
export class ProductPurchaseComponent implements OnInit {
  destroy$: Subject<boolean> = new Subject<boolean>();
  showEmptycart: boolean = true;
  constructor(private route: ActivatedRoute, private noteService: NotesService, private router: Router) { }

  ngOnInit() {
    this.myCart();
  }
  toCheckOut() {
    this.router.navigateByUrl('placeorder');
  }
  mycartData: '';
  productData: "";
  myCart() {
    this.noteService.myCart()
      .subscribe((data) => {
        this.mycartData = data['data'][0];
        console.log("My cart data=========>", this.mycartData);
        this.productData = this.mycartData["product"];
        console.log("product data============>", this.productData);
      })
  }
}
