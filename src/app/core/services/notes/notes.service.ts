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
    return this.httpservice.postData("notes/deleteForeverNotes",body);
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
  /**
  * @description : change note Color 
  */
  changeColor(data){
    return this.httpservice.postData("notes/changesColorNotes",data)
  }
  /**
  * @description : add Update Reminder
  */
addUpdateReminder(body){
  return this.httpservice.postData("notes/addUpdateReminderNotes",body);
}
getReminderNotesList(){
  return this.httpservice.getData("notes/getNotesList");
}

/**
 * Archive
 */
archiveNote(body){
  return this.httpservice.postData("notes/archiveNotes",body);
}
getArchivedList(){
  return this.httpservice.getData("notes/getArchiveNotesList");
}
}
