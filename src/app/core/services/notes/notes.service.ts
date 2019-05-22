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
    return this.httpservice.getData("notes/getNotesList")
  }
  getNoteList(){
    return this.httpservice.getData("notes/getNotesList");
  }
  createLabel(body){
    return this.httpservice.postData("noteLabels",body);
  }
  showNoteLabels(){
    return this.httpservice.getData("noteLabels/getNoteLabelList");
  }
  logout(){
    return this.httpservice.postData("user/logout",{});
  }
  deleteNote(body){
    return this.httpservice.postData("notes/trashNotes",body);
  }
 /**
   * @Purpose : Add label
   **/
  addLabel(body){
    return this.httpservice.postDataForEdit("noteLabels",body)
  }

  showNoteLabel(){
    return this.httpservice.postDataForShowLabel("noteLabels/getNoteLabelList")
  }
}
