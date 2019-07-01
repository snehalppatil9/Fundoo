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
  
  constructor() { }

  ngOnInit() {
  }
}
