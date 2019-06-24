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
  * @Purpose: Add Label to Notes
  **/
  addLabelToNotes(cardId, labelId) {
    return this.httpservice.postData("notes/" + cardId + "/addLabelToNotes/" + labelId + "/add", {});
  }
  /**
  * @Purpose: Remove Label from note
  **/
  removeLabelFromNotes(cardId, labelId) {
    return this.httpservice.postData("notes/" + cardId + "/addLabelToNotes/" + labelId + "/remove", {});
  }
  /**
   * @Purpose : add collaborator note
  **/
  addColNote(body, id) {
    return this.httpservice.postDataForSearchUser("notes/" + id + "/AddcollaboratorsNotes", body)
  }
  removeColaborator(noteId, userId) {
    return this.httpservice.deleteData("notes/" + noteId + "/removeCollaboratorsNotes/" + userId);
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
  removeReminder(body) {
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
  deleteforeverNote(body) {
    return this.httpservice.postData("notes/deleteForeverNotes", body);
  }
  pinChange(body) {
    return this.httpservice.postDataforPin("notes/pinUnpinNotes", body);
  }

  getNotelistByLabel(label) {
    return this.httpservice.postData("notes/getNotesListByLabel/" + label, {});
  }


     /**
     *  @description  : Question and Answers
     */

  addMessageQA(body) {
    return this.httpservice.postData("questionAndAnswerNotes/addQuestionAndAnswer", body)
  }
  getNotesDetail(noteId) {
    return this.httpservice.getData("notes/getNotesDetail/" + noteId)
  }
  viewReply(body, parentId) {
    return this.httpservice.postData("questionAndAnswerNotes/reply/" + parentId, body)
  }
  addRating(body, parentId) {
    return this.httpservice.postData("questionAndAnswerNotes/rate/" + parentId, body);
  }
  addLikes(body, parentId){
    return this.httpservice.postData("questionAndAnswerNotes/like/" + parentId,body)
  }



  getService(){
    return this.httpservice.getDataService("user/service")
  }
  productCarts(body){
    return this.httpservice.postDataService("productcarts/addToCart",body)

  }
  getCartDetails(cartId){
    return this.httpservice.getDataService("/productcarts/getCartDetails/"+cartId)
  }
}
