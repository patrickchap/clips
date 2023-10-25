import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() modalId = '';
  constructor(public _modalService: ModalService, public ref: ElementRef) {}

  ngOnInit(): void {
    document.body.appendChild(this.ref.nativeElement);
  }

  toggleModal(){
    this._modalService.toggle(this.modalId);
  }

}
