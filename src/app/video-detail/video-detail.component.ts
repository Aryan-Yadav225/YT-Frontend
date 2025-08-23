import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../video.service';
import { VideoPlayerComponent } from '../video-player/video-player.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { UserService } from '../user.service';

@Component({
  selector: 'app-video-detail',
  imports: [VideoPlayerComponent, CommonModule, MatIconModule, MatChipsModule, MatDividerModule, MatCardModule, MatChipsModule],
  templateUrl: './video-detail.component.html',
  styleUrl: './video-detail.component.css'
})
export class VideoDetailComponent {

  videoId!: string;
  videoUrl!: string;
  thumbnailUrl!: string;
  videoAvailable: boolean = false;
  videoTitle!: string
  videoTags!: string[];
  videoDescription!: string;
  viewCount: number = 0;
  likeCount!: number;
  dislikeCount!: number;
  showSubscribeButton: boolean = true;
  showUnSubscribeButton: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private videoService: VideoService, private userService: UserService) {
    this.videoId = this.activatedRoute.snapshot.params['videoId'];
    this.videoService.getVideoDetails(this.videoId).subscribe((data) => {
      this.videoUrl = data.videoUrl;
      this.videoTitle = data.title;
      this.videoDescription = data.description;
      this.videoTags = data.tags;
      this.thumbnailUrl = data.thumbnailUrl;
      this.likeCount = data.likeCount;
      this.dislikeCount = data.dislikeCount;
      this.viewCount = data.viewCount;
      this.videoAvailable = true;
    });
  }

  likeVideo() {
    this.videoService.likeVideo(this.videoId).subscribe(data => {
      this.likeCount = data.likeCount;
      this.dislikeCount = data.dislikeCount;
    })
  }

  disLikeVideo() {
    this.videoService.disLikeVideo(this.videoId).subscribe(data => {
      this.likeCount = data.likeCount;
      this.dislikeCount = data.dislikeCount;
    })
  }

  subscribeToUser() {
    let userId = this.userService.getUserId();
    console.log(userId);
    this.userService.subscribeToUser(userId).subscribe(data => {
      this.showUnSubscribeButton = true;
      this.showSubscribeButton = false;
    })
  }

  unSubscribeToUser() {
    let userId = this.userService.getUserId();
    this.userService.unSubscribeUser(userId).subscribe(data => {
      this.showUnSubscribeButton = false;
      this.showSubscribeButton = true;
    })
  }
}
