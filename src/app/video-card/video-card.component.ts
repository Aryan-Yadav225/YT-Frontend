import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterModule } from '@angular/router';
import { VideoDto } from '../VideoDTO';

@Component({
  selector: 'app-video-card',
  imports: [MatCardModule, RouterModule],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.css'
})
export class VideoCardComponent {
  constructor(private router: Router) { }

  @Input()
  video!: VideoDto;

}
