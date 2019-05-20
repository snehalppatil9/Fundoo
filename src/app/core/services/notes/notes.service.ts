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
    /**
   * @Purpose : Get Note without refresh
   **/
  getNotes():any{
    return this.httpservice.getData2("notes/getNotesList")
  }
  getNoteList(){
    return this.httpservice.getData2("notes/getNotesList");
  }
  createLabel(body){
    return this.httpservice.postDataForJSON("noteLabels",body);
  }
  showNoteLabels(){
    return this.httpservice.getData2("noteLabels/getNoteLabelList");
  }
  logout(){
    return this.httpservice.postDataForJSON("user/logout",{});
  }
  deleteNote(body){
    return this.httpservice.postDataForJSON("notes/trashNotes",body);
  }
 
}
