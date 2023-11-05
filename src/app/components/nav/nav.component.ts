import { Component, OnInit, Inject } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { concatMap, tap, map } from 'rxjs/operators';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  metadata = {};
  constructor(private _modalService: ModalService, public _authService: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  isOpen = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  openUserAuthModal(event: MouseEvent) {
    event.preventDefault();

    this._modalService.toggle('auth');
  }

}
