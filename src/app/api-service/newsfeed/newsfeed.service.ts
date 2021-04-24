import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Friend, Newsfeed } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class NewsfeedService {

  constructor(
    private http: HttpClient
  ) { }

  loadNewsfeed(): Observable<Newsfeed[]> {
    return this.http.get<Newsfeed[]>('/api/newsfeed');
  }

  loadFriends(): Observable<Friend[]> {
    return this.http.get<Friend[]>('/api/friends');
  }

  updateNewsfeed(newsfeed: Newsfeed): Observable<Newsfeed> {
    return this.http.put(`/api/newsfeed/${newsfeed.id}`, newsfeed).pipe(map(() => newsfeed));
  }
}
