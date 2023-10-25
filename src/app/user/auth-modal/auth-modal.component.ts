import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent implements OnInit, OnDestroy {

  constructor(public _modalService: ModalService) { }

  ngOnInit(): void {
    this._modalService.register('auth');
  }

  ngOnDestroy(): void {
    this._modalService.unRegister('auth');
  }
}
