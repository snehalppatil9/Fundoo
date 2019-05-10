import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http.service';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private service: HttpService) { }
   addNote(body){
    return this.service.postDataForEncoded("/notes/addNotes",body);
  }
}
