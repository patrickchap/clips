import { Component, OnInit, Inject } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import { concatMap, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  metadata = {};
  constructor(private _modalService: ModalService, public _authService: AuthService, private http: HttpClient) { }

  ngOnInit(): void {
    console.log("NavComponent ngOnInit");
    this._authService.user$
      .pipe(
        concatMap((user) =>
          // Use HttpClient to make the call
          this.http.get(
            encodeURI(`https://dev-2cjpbt5spkzvia6t.us.auth0.com/api/v2/users/${user?.sub}`)
          )
        ),
        map((user: any) => console.log(user)),
      )
      .subscribe();
  }

  openUserAuthModal(event: MouseEvent) {
    event.preventDefault();

    this._modalService.toggle('auth');
  }

}
