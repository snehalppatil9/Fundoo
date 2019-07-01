import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { NotesService } from 'src/app/core/services/notes/notes.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {
  @Input() cardId;
  @ViewChild('address') address: ElementRef;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private noteService: NotesService, private route: ActivatedRoute, private router: Router, private snackbar: MatSnackBar) { }
  productcardId: '';
  ngOnInit() {
  this.myCart();
  }
  placeOrder() {
    var body = {
      "cartId" :  this.mycartData['id'],
      "address" : this.address.nativeElement.innerHTML
    }
    console.log("post body in placr order==========>", body)
    this.noteService.placeOrder(body)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.snackbar.open('your order placed successfully.', '', { duration: 3000 });
      }, (error) => {
      });
    this.router.navigateByUrl('completePayment');
  }
  mycartData: '';
  productData: "";
  myCart() {
    this.noteService.myCart()
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.mycartData = data['data'][0];
        console.log("My cart data=========>", this.mycartData);
        this.productData = this.mycartData["product"];
        console.log("product data============>", this.productData);
      })
  }
}
