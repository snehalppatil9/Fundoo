import { Component, OnInit,Input,Output ,EventEmitter} from '@angular/core';
import { NotesService } from 'src/app/core/services/notes/notes.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss']
})
export class PinComponent implements OnInit {
private isPin:boolean=false;

destroy$: Subject<boolean> = new Subject<boolean>();
@Input() card;
@Output() onChange = new EventEmitter;
  constructor(private noteService : NotesService) { }

  ngOnInit() {
  }
  pin(){
    this.isPin=!this.isPin;
    let body={
        "isPined":this.isPin,
        "noteIdList":this.card.id
      }
      this.noteService.pinChange(body)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) =>{
        this.onChange.emit({})
      });
   
}
}
