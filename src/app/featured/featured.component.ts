import { Component, inject } from '@angular/core';
import { VideoCardComponent } from '../video-card/video-card.component';
import { CommonModule } from '@angular/common';
import { VideoDto } from '../VideoDTO';
import { VideoService } from '../video.service';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-featured',
  imports: [VideoCardComponent, CommonModule],
  templateUrl: './featured.component.html',
  styleUrl: './featured.component.css'
})
export class FeaturedComponent {
  featuredVideos: Array<VideoDto> = [];
  isAuthenticated = false;
  private readonly oidcSecurityService = inject(OidcSecurityService);

  constructor(private videoService: VideoService) {}
  
  ngOnInit(): void {
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated }) => {
      this.isAuthenticated = isAuthenticated;
      if (isAuthenticated) {
        this.videoService.getAllVideos().subscribe(response => {
          this.featuredVideos = response;
        });
      }
    });
  }
}
