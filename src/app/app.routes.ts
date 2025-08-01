import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'upload', pathMatch: 'full' },
  {
    path: 'upload',
    loadComponent: () =>
      import('./upload-video/upload-video.component').then(
        (m) => m.UploadVideoComponent
      ),
  },
];
