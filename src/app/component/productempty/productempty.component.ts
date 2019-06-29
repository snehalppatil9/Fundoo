import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/core/services/notes/notes.service';
import { Service } from 'src/app/core/model/user-model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-productempty',
  templateUrl: './productempty.component.html',
  styleUrls: ['./productempty.component.scss']
})
export class ProductemptyComponent implements OnInit {
  destroy$ : Subject<boolean> = new Subject<boolean>();
  cardId = localStorage.getItem("cardId")
  constructor(private noteService : NotesService) { }

  ngOnInit() {
    this.getCartDetails(this.cardId)
  }
  service : Service[] =[];
  productData = '';
  getCartDetails(cardId) {
    this.noteService.getCartDetails(cardId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        this.service = response["data"];
        console.log("get product empty note data for sevice ===============>", this.service);
        this.productData = this.service["product"];
        console.log("get product empty data for sevice ===============>", this.productData);
      }, (error) => {
      });
  }
}
