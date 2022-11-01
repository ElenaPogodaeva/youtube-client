import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchResponseModel } from '../../../app/shared/models/search-response.model';
import { environment } from '../../../environments/environment';
import { VideoResponseModel } from '../../../app/shared/models/video-response.model';

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
    return this.http.get<SearchResponseModel>('search', {
      params,
    });
  }

  getVideosByIds(ids: string): Observable<VideoResponseModel> {
    const params = new HttpParams()
      .set('part', 'snippet, statistics')
      .set('id', ids)
      .set('key', environment.API_KEY);
    return this.http.get<VideoResponseModel>('videos', {
      params,
    });
  }
}
