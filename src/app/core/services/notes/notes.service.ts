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
  getNoteList(){
    return this.httpservice.getData2("notes/getNotesList");
  }
  createLabel(body){
    return this.httpservice.postDataForJSON("noteLabels",body);
  }
  logout(){
    return this.httpservice.postDataForJSON("user/logout",{});
  }
  deleteNote(body){
    return this.httpservice.postDataForJSON("notes/trashNotes",body);
  }
  showNoteLabels(){
    return this.httpservice.getData2("noteLabels/getNoteLabelList");
  }
}
