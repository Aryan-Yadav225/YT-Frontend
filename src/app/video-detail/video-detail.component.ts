import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../video.service';
import { VideoPlayerComponent } from '../video-player/video-player.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-detail',
  imports: [VideoPlayerComponent, CommonModule],
  templateUrl: './video-detail.component.html',
  styleUrl: './video-detail.component.css'
})
export class VideoDetailComponent {

  videoId!: string;
  videoUrl!: string;
  thumbnailUrl!: string;
  videoAvailable: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private videoService: VideoService) {
    this.videoId = this.activatedRoute.snapshot.params['videoId'];
    this.videoService.getVideoDetails(this.videoId).subscribe((data) => {
      this.videoUrl = data.videoUrl;
      data.title
      data.description
      data.tags
      this.thumbnailUrl = data.thumbnailUrl;
      this.videoAvailable = true;
    });
  }
}
