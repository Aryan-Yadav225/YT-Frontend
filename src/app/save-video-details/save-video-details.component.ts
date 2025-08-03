import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { VgCoreModule } from '@videogular/ngx-videogular/core';
import { VgControlsModule } from '@videogular/ngx-videogular/controls';
import { VgOverlayPlayModule } from '@videogular/ngx-videogular/overlay-play';
import { VgBufferingModule } from '@videogular/ngx-videogular/buffering';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-save-video-details',
  imports: [
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    MatOptionModule,
    MatLabel,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatChipsModule,
    CommonModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
  ],
  templateUrl: './save-video-details.component.html',
  styleUrl: './save-video-details.component.css',
})
export class SaveVideoDetailsComponent {
  saveVideoDetailsForm: FormGroup;
  title: FormControl = new FormControl('');
  description: FormControl = new FormControl('');
  videoStatus: FormControl = new FormControl('');

  readonly addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  readonly announcer = inject(LiveAnnouncer);

  tags: string[] = [];
  selectedFile!: File;
  selectedFileName: string = '';
  fileSelected: boolean = false;
  videoId = '';

  constructor( private activatedRoute: ActivatedRoute, private videoService: VideoService) {
    this.videoId = this.activatedRoute.snapshot.params['videoId'];
    this.saveVideoDetailsForm = new FormGroup({
      title: this.title,
      description: this.description,
      videoStatus: this.videoStatus,
    });
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our fruit
    if (value) {
      this.tags.push(value);
    }
    // Clear the input value
    event.chipInput!.clear();
  }

  remove(value: string): void {
    const index = this.tags.indexOf(value);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
  }

  onFileSelected($event: Event) {
    // @ts-ignore
    this.selectedFile = event?.target.files[0];
    this.selectedFileName = this.selectedFile.name;
    this.fileSelected = true;
  }

  onUpload() {
    this.videoService.uploadThumbnail(this.selectedFile, this.videoId).subscribe((data)=>{
      console.log("ThumbnailURL", data)
      // show an upload success notification.
        // this.matSnackBar.open("Thumbnail Upload Successful", "OK");
    })
  }
  trackTag(index: number, item: string): string {
    return item;
  }
}
