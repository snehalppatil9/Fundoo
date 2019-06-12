import { Component, OnInit,Inject } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from '../../core/services/user/user.service'
@Component({
  selector: 'app-image-crop',
  templateUrl: './image-crop.component.html',
  styleUrls: ['./image-crop.component.scss']
})
export class ImageCropComponent implements OnInit {

  
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor( private userService : UserService, private dialogRef : MatDialogRef<ImageCropComponent>, 
  @Inject(MAT_DIALOG_DATA) public data : any ) { }
  
  private apiImage;
  private croppedImage;

  ngOnInit() {
  }

  imageCropped(event){
   this.croppedImage=event
  }

 /**
  * 
  * @description uploading the image to profile
  */
  uploadpic(){
    this.apiImage=this.croppedImage.file
    const uploadData = new FormData();
    uploadData.append('file', this.apiImage, this.apiImage.name);
    this.userService.addProfileImage(uploadData)
    .pipe(takeUntil(this.destroy$))
    .subscribe(res => {
      this.dialogRef.close();
      localStorage.setItem("userImage",res['status'].imageUrl);
    }, error => {
    })
  }
}
