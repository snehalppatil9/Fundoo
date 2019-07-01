import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Service } from 'src/app/core/model/user-model';
import { Params, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { NotesService } from 'src/app/core/services/notes/notes.service';

@Component({
  selector: 'app-complete-payment',
  templateUrl: './complete-payment.component.html',
  styleUrls: ['./complete-payment.component.scss']
})
export class CompletePaymentComponent implements OnInit {
  destroy$ : Subject<boolean> = new Subject<boolean>();
  cardId = localStorage.getItem('cardId');
  constructor(private route: ActivatedRoute,private noteService : NotesService) { }

  ngOnInit() {
  this.myCart();
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
