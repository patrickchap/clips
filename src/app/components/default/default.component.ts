import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import IVideo from 'src/app/interfaces/video';
import { VideoServiceService } from 'src/app/services/video-service.service';

interface clipInfo {
  clipImage: string,
  clipHeading: string,
  clipName: string,
  clipDate: string,
}

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  limit = 10;
  offset = 0;
  clips: clipInfo[] = []

  constructor(private _videoService: VideoServiceService) {}

  ngOnInit() {
    this._videoService.getVideoList(this.limit, this.offset)
      .pipe(
        map((videos: IVideo[]) => videos.map(video => this.mapToClipInfo(video)))
      )
      .subscribe((videos) => {
        console.log(videos);
        this.clips.push(...videos);
    })
  }


  private mapToClipInfo(video: IVideo): clipInfo {
    return {
      clipImage: video.thumbnail_url,
      clipHeading: video.title,
      clipName: video.user_id,
      clipDate: video.created_at
    };
  }

}

