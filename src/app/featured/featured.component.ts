import { Component } from '@angular/core';
import { VideoCardComponent } from '../video-card/video-card.component';
import { CommonModule } from '@angular/common';
import { VideoDto } from '../VideoDTO';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-featured',
  imports: [VideoCardComponent, CommonModule],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css'
})
export class FeaturedComponent {

  featuredVideos: Array<VideoDto> = [];
  constructor(private videoService: VideoService) {}
  ngOnInit(): void {
    this.videoService.getAllVideos().subscribe(response => {
      this.featuredVideos = response;
    })
  }
}
