import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { NotesService } from '../../core/services/notes/notes.service'
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})

export class NoteComponent implements OnInit {
  @ViewChild('title') title: ElementRef;
  @ViewChild('description') description: ElementRef ;
  private noteCard:boolean=true;    
  private listNote:boolean=false;
  private listArray=[];
  private labels=[];
  constructor(private noteService : NotesService) { }

  ngOnInit() {
   
     }
  /**
  * 
  * @description opening the notecard for adding
  */
  noteCardOpen(){
    this.noteCard=!(this.noteCard);
   
  }
  list(){
    this.listNote=true;
  }
  close(){
    this.noteCard=!(this.noteCard);
    let title1=this.title.nativeElement.innerHTML;
    if(title1 == ""){
      this.listArray=[];
      this.listNote=false;
      return false;
    }
    let labelId=[]
    for(let i=0;i<this.labels.length;i++){
      labelId.push(this.labels[i].id)
    }
    if(this.listNote==false){

      let description1=this.description.nativeElement.innerHTML;
      let body={
        "title" : title1,
        "description" : description1,
      }
      this.noteService.addNote(this.getFormUrlEncoded(body))
       .subscribe((response) =>{
         console.log('Response ====> ', response)
       },(error) => {
        console.log('Error ====> ', error)
      });}
      else{
        this.listArray=[];
        this.listNote=false;
      }
  }

  getFormUrlEncoded(toConvert) {
    const formBody = [];
    for (const property in toConvert) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(toConvert[property]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    return formBody.join('&');
  }
}



