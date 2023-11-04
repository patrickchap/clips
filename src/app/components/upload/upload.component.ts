import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  files: File[] = [];

  uploadForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    file: new FormControl('', Validators.required)
  });

  filesBrowsed(event: any): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files) {
      this.files = Array.from(inputElement.files);
      this.uploadForm.get('file')?.setValue(inputElement.files);
    }
  }

  filesDropped(event: File[]): void {
    console.log("event", event);
    this.files = event;
    this.uploadForm.get('file')?.setValue(this.files);
  }

  upload(): void {
    //get image upload file obj;
  }

  onSubmit(): void {
    console.log("form", this.uploadForm.value);
  }
}

