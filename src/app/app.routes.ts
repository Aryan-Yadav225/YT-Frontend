import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
    children: [
      {
        path: 'featured',
        loadComponent: () =>
          import('./featured/featured.component').then(
            (m) => m.FeaturedComponent
          ),
      },
      {
        path: 'subscriptions',
        loadComponent: () =>
          import('./subscription/subscription.component').then(
            (m) => m.SubscriptionComponent
          ),
      },
      {
        path: 'history',
        loadComponent: () =>
          import('./history/history.component').then(
            (m) => m.HistoryComponent
          ),
      },
      {
        path: 'liked-videos',
        loadComponent: () =>
          import('./liked-videos/liked-videos.component').then(
            (m) => m.LikedVideosComponent
          ),
      },
    ],
  },
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
  {
    path: 'callback',
    loadComponent: () =>
      import('./callback/callback.component').then(
        (m) => m.CallbackComponent
      ),
  },
];
