import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResponseModel } from 'src/app/shared/models/search-response.model';
import { environment } from 'src/environments/environment';
import { VideoResponseModel } from 'src/app/shared/models/video-response.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getVideosByWord(query: string): Observable<SearchResponseModel> {
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('maxResults', 25)
      .set('q', query)
      .set('key', environment.API_KEY);
    return this.http.get<SearchResponseModel>('https://www.googleapis.com/youtube/v3/search', {
      params,
    });
  }

  getVideosByIds(ids: string): Observable<VideoResponseModel> {
    const params = new HttpParams()
      .set('part', 'snippet, statistics')
      .set('id', ids)
      .set('key', environment.API_KEY);
    return this.http.get<VideoResponseModel>('https://www.googleapis.com/youtube/v3/videos', {
      params,
    });
  }
}
