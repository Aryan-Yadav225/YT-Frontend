import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadVideoResponse } from './upload-video/UploadVideoResponse';
import { VideoDto } from './VideoDTO';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  getAllVideos() {
    return this.httpClient.get<Array<VideoDto>>('http://localhost:8080/api/videos');
  }
  constructor(private httpClient: HttpClient) { }

  uploadVideo(fileEntry: File): Observable<UploadVideoResponse> {
    // Create a FormData object to hold the file
    const formData = new FormData();
    formData.append('file', fileEntry, fileEntry.name);

    return this.httpClient.post<UploadVideoResponse>('http://localhost:8080/api/videos', formData);
  }

  uploadThumbnail(fileEntry: File, videoId: string): Observable<string> {
    // Create a FormData object to hold the file
    const formData = new FormData();
    formData.append('file', fileEntry, fileEntry.name);
    formData.append('videoId', videoId);

    //HTTP POST call to upload Thumbnail
    return this.httpClient.post('http://localhost:8080/api/videos/thumbnail', formData, {
      responseType: 'text'
    });
  }

  getVideoDetails(videoId: string): Observable<VideoDto> {
    return this.httpClient.get<VideoDto>(`http://localhost:8080/api/videos/${videoId}`);
  }

  saveVideo(videoMetaData: VideoDto): Observable<VideoDto> {
    // HTTP PUT call to save video details
    return this.httpClient.put<VideoDto>('http://localhost:8080/api/videos', videoMetaData);
  }
  
}
