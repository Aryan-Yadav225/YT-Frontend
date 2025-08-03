import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, inject, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatChipEditedEvent,
  MatChipGrid,
  MatChipInputEvent,
  MatChipRow,
  MatChipsModule,
} from '@angular/material/chips';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

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

  constructor() {
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
  trackTag(index: number, item: string): string {
  return item;
}
}
