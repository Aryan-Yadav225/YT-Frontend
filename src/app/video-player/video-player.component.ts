import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  NgZone,
  AfterViewChecked,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';

import { Router, RouteConfigLoadEnd } from '@angular/router';

@Component({
  selector: 'app-video-player',
  imports: [
    VgOverlayPlayModule,
    VgCoreModule,
    VgBufferingModule,
    VgControlsModule,
  ],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css',
})
export class VideoPlayerComponent implements OnChanges {
  @Input() videoURL: string = '';
  videoReady = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['videoURL'] && this.videoURL) {
      // Reset player to force full DOM re-init
      this.videoReady = false;
      setTimeout(() => {
        this.videoReady = true;
      });
    }
  }
}