import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpservice: HttpService) { }
   addNote(body){
    return this.httpservice.postAddNote("notes/addNotes",body);
  }
}
