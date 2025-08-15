import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'upload', pathMatch: 'full' },
  {
    path: 'uploadVideo',
    loadComponent: () =>
      import('./upload-video/upload-video.component').then(
        (m) => m.UploadVideoComponent
      ),
  },
  {
    path: 'saveVideo/:videoId',
    loadComponent: () =>
      import('./save-video-details/save-video-details.component').then(
        (m) => m.SaveVideoDetailsComponent
      ),
  },
  {
    path: 'videoDetails/:videoId',
    loadComponent: () =>
      import('./video-detail/video-detail.component').then(
        (m) => m.VideoDetailComponent
      ),
  },
];
