import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { NotesService } from 'src/app/core/services/notes/notes.service';
import { Service } from '../../core/model/user-model'
@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrls: ['./place-order.component.scss']
})
export class PlaceOrderComponent implements OnInit {
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
  placeOrder(){
    this.router.navigateByUrl('completePayment/'+this.dataId);
  }
}
