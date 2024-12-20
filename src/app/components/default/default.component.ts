// biome-ignore lint/style/useImportType: <explanation>
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import type IVideo from 'src/app/interfaces/video';
// biome-ignore lint/style/useImportType: <explanation>
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

  constructor(private _videoService: VideoServiceService) { }

  ngOnInit() {
    this._videoService.getVideoList(this.limit, this.offset)
      .pipe(
        map((videos: IVideo[]) => videos.map(video => this.mapToClipInfo(video)))
      )
      .subscribe((videos) => {
        this.clips.push(...videos);
      })
  }

  private mapToClipInfo(video: IVideo): clipInfo {
    return {
      clipImage: video.thumbnail_url,
      clipHeading: video.title,
      clipName: video.description,
      clipDate: video.created_at
    };
  }

}

