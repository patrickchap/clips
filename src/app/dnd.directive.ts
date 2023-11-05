import { Directive, HostListener, HostBinding, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDnd]'
})
export class DndDirective {
  @HostBinding('class.fileover') fileOver!: boolean;
  @Output() files: EventEmitter<File[]> = new EventEmitter();

  @HostListener('dragover', ['$event']) onDragOver(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    console.log("dragover")
    this.fileOver = true;
  }

  @HostListener('dragleave', ['$event']) public onDragLeave(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    console.log("dragleave");
    this.fileOver = false;
  }

  @HostListener('drop', ['$event']) public onDrop(evt: DragEvent) {
    evt.preventDefault();
    evt.stopPropagation();
    console.log("drop");
    this.fileOver = false;
    const files: File[] = [];
    const dataTransferFiles = evt.dataTransfer?.files ?? [];
    for (let i = 0; i < dataTransferFiles.length; i++) {
      const file = dataTransferFiles[i];
      files.push(file);
    }
    if (files.length > 0) {
      this.files.emit(files);
    }
  }

}
