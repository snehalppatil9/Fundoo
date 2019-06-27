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
   this.getCartDetails(this.cardId);
  }
  service : Service[] =[];
  productData = '';
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
}
