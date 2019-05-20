/******************************************************************************
 *  Execution       :   1. default node         cmd> allnote.component.ts
 *
 *  Purpose         : To get all the note data
 *
 *  @file           : allnote.component.ts
 *  @author         : Snehal Patil
 *  @version        : 1.0
 *  @since          : 28-04-2019
 *
 ******************************************************************************/
import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from '../../core/services/data/data.service'
import { Note } from '../../core/model/user-model'
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { EventEmitter } from 'events';
@Component({
  selector: 'app-allnote',
  templateUrl: './allnote.component.html',
  styleUrls: ['./allnote.component.scss']
})
export class AllnoteComponent implements OnInit {
  notes: Note[] = [];
  message: string;
  destory$: Subject<boolean> = new Subject<boolean>();
  view: boolean;
  @Input() note;
  @Input() searchItem;
  @Output() anyChanges = new EventEmitter();
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.dataService.allNote
      .pipe(takeUntil(this.destory$))
      .subscribe(data => this.notes = data);
       console.log('all note -->', this.notes);

    
    this.dataService.currentMessageView.pipe(takeUntil(this.destory$))
      .subscribe(message => {
        this.view = message
      })
  }
}