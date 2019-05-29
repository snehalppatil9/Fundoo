import { Injectable } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private httpservice: HttpService) { }
  addNote(body) {
    return this.httpservice.postAddNote("notes/addNotes", body);
  }
  
  /**
 * @Purpose : Get Note without refresh
 **/
  getNotes(): any {
    return this.httpservice.getData("notes/getNotesList")
  }
  getNoteList() {
    return this.httpservice.getData("notes/getNotesList");
  }
  createLabel(body) {
    return this.httpservice.postData("noteLabels", body);
  }
  showNoteLabels() {
    return this.httpservice.getData("noteLabels/getNoteLabelList");
  }
  /**
  * @Purpose: Delete Note Label
  **/
  deleteNoteLabel(labelId) {
    return this.httpservice.postDataForDeleteLabel("noteLabels/" + labelId + "/deleteNoteLabel")
  }
  /**
   * @Purpose : add collaborator note
  **/
  addColNote(body) {
    return this.httpservice.postDataForSearchUser("notes/{id}/AddcollaboratorsNotes", body)
  }
  /**
   * @Purpose: Update Note
   **/
  updateNoteLabel(labelId, body) {
    return this.httpservice.postData("noteLabels/" + labelId + "/updateNoteLabel", body)
  }
  logout() {
    return this.httpservice.postData("user/logout", {});
  }

  /**
   * @Description : Update Note
   **/
  updateNote(body) {
    return this.httpservice.postDataForUpdateNote("notes/updateNotes", body)
  }
  /**
    * @description  :  Add label and show label
    **/
  addLabel(body) {
    return this.httpservice.postData("noteLabels", body)
  }
  showNoteLabel() {
    return this.httpservice.postDataForShowLabel("noteLabels/getNoteLabelList")
  }
  /**
  * @description : change note Color 
  */
  changeColor(data) {
    return this.httpservice.postData("notes/changesColorNotes", data)
  }
  /**
  * @description : add Update Reminder
  */
  addUpdateReminder(body) {
    return this.httpservice.postData("notes/addUpdateReminderNotes", body);
  }
  getReminderNotesList() {
    return this.httpservice.getData("notes/getReminderNotesList");
  }
  removeReminder(body){
    return this.httpservice.postData("notes/removeReminderNotes", body);
  }

  /**
   *  @description  : Archive
   */
  archiveNote(body) {
    return this.httpservice.postData("notes/archiveNotes", body);
  }
  getArchivedList() {
    return this.httpservice.getData("notes/getArchiveNotesList");
  }
  /**
  * @description  : Trash
  */
  deleteNote(body) {
    return this.httpservice.postData("notes/trashNotes", body);
  }
  getTrashNotes() {
    return this.httpservice.getData("notes/getTrashNotesList");
  }
  deleteforeverNote(body){
    return this.httpservice.postData("notes/deleteForeverNotes", body);
  }

}
