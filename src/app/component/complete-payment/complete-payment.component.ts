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
  dataId : '';
  constructor(private route: ActivatedRoute,private noteService : NotesService) { }

  ngOnInit() {
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: Params) => {
        this.dataId = params['data'];
        console.log("dataId=====>",this.dataId);
        this.getService();
      })
  }
  service : Service[] =[];
  getService(){
    this.noteService.getService()
        .pipe(takeUntil(this.destroy$))
        .subscribe((response) => {
          this.service = response["data"].data;
          console.log("get product Purchase note ===============>", this.service);
  
        }, (error) => {
        }); 
  }
}
