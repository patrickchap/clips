import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  metadata = {};
  constructor(private _modalService: ModalService, public _authService: AuthService) { }

  ngOnInit(): void {}

  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  openUserAuthModal(event: MouseEvent) {
    console.log("open Nav")
    event.preventDefault();

    this._modalService.toggle('auth');
  }

}
