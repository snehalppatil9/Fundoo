import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotesService } from 'src/app/core/services/notes/notes.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss']
})
export class PinComponent implements OnInit {
  isPin: boolean = false;

  destroy$: Subject<boolean> = new Subject<boolean>();
  @Input() card;
  @Output() onChange = new EventEmitter;
  constructor(private noteService: NotesService) { }

  ngOnInit() {
    if (this.card)
      this.isPin = this.card.isPined;
  }
  pin() {
    this.isPin = !this.isPin;
     this.onChange.emit(this.isPin);
  }
  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
