import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserModule } from './user/user.module'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ClipComponent } from './components/clip/clip.component';
import { SharedModule } from './shared/shared.module';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';
import { UploadComponent } from './components/upload/upload.component';
import { MyClipsComponent } from './components/my-clips/my-clips.component';
import { DndDirective } from './dnd.directive';
import { DefaultComponent } from './components/default/default.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomInputComponent } from './components/custom-input/custom-input.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ClipComponent,
    UploadComponent,
    MyClipsComponent,
    DndDirective,
    DefaultComponent,
    CustomInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: environment.domain,
      clientId: environment.clientId,
      authorizationParams: {
        redirect_uri: environment.redirectUri,
        // Request this audience at user authentication time
        audience: 'https://dev-2cjpbt5spkzvia6t.us.auth0.com/api/v2/',

        scope: 'read:current_user'
      },
        // Specify configuration for the interceptor
      httpInterceptor: {
        allowedList: [
        {
            // Match any request that starts 'http://0.0.0.0:8080/api/v1/*' (note the asterisk)
            uri: 'http://0.0.0.0:8080/api/v1/*',
            tokenOptions: {
              authorizationParams: {
                // The attached token should target this audience
                audience: environment.audience,

                // The attached token should have these scopes
                scope: 'read:current_user'
              }
            }
        },
        {
        // Match any request that starts
          uri: `${environment.audience}*`,
          tokenOptions: {
            authorizationParams: {
              // The attached token should target this audience
              audience: environment.audience,

              // The attached token should have these scopes
              scope: 'read:current_user'
            }
          }
        }
        ]
      }
    }),
  ],
  providers: [
  { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
