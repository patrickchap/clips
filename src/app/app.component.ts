import { Component } from '@angular/core';

interface clipInfo {
  clipImage: string,
  clipHeading: string,
  clipName: string,
  clipDate: string,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'clips';

  clips: clipInfo[] = [
    {clipImage: "assets/img/1.jpg", clipHeading: "Game Highlighting Clip", clipName: "Luis Ramirez", clipDate: "March 31, 2020"},
    {clipImage: "assets/img/2.jpg", clipHeading: "Game Highlighting Clip", clipName: "Luis Ramirez", clipDate: "March 31, 2020"},
    {clipImage: "assets/img/3.jpg", clipHeading: "Game Highlighting Clip", clipName: "Luis Ramirez", clipDate: "March 31, 2020"},
    {clipImage: "assets/img/2.jpg", clipHeading: "Game Highlighting Clip", clipName: "Luis Ramirez", clipDate: "March 31, 2020"},
    {clipImage: "assets/img/3.jpg", clipHeading: "Game Highlighting Clip", clipName: "Luis Ramirez", clipDate: "March 31, 2020"},
    {clipImage: "assets/img/1.jpg", clipHeading: "Game Highlighting Clip", clipName: "Luis Ramirez", clipDate: "March 31, 2020"},
  ]


}
