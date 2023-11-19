import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  files: File[] = [];
  isFormSubmitted = false;
  uploadForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    file: new FormControl(null, Validators.required)
  });

  filesBrowsed(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files) {
      this.files = Array.from(inputElement.files);
    }
  }

  filesDropped(event: File[]): void {
    this.files = event;
    if(this.files.length > 0){
      this.uploadForm.get("file")?.clearValidators();
      this.uploadForm.get("file")?.updateValueAndValidity();
    }
  }

  upload(): void {
    //get image upload file obj;
  }

  onSubmit(): void {
    this.isFormSubmitted = true;
    if(!this.uploadForm.valid){
      console.log("errrors")
      return;
    }

    console.log("form", this.uploadForm.value);
    console.log("file", this.files);

  }
}

