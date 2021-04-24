import {Store} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {Injectable} from '@angular/core';
import * as _newfeedActions from './newsfeed.actions';
import { NewsfeedService } from '../api-service/newsfeed/newsfeed.service';

@Injectable()
export class NewsfeedEffects {

  loadfriends$ = createEffect(() => this.actions$.pipe(
    ofType(_newfeedActions.loadFriendList),
    mergeMap(action => this.newsfeedApi.loadFriends().pipe(
      map(sd => {
        return _newfeedActions.frindListLoadedSuccessfully({list: sd});
      }),
      catchError(e => {
        return of(_newfeedActions.frindListLoadingFailed({
          errorMessage: 'There was a problem while loading friends list.'
        }));
      })
    ))
  ));

  loadNewsFeed$ = createEffect(() => this.actions$.pipe(
    ofType(_newfeedActions.newsfeedListLoad),
    mergeMap(action => this.newsfeedApi.loadNewsfeed().pipe(
      map(sd => {
        return _newfeedActions.newsfeedListLoadedSuccessfully({list: sd});
      }),
      catchError(e => {
        return of(_newfeedActions.newsfeedListLoadingFailed({
          errorMessage: 'There was a problem while loading newsfeed list.'
        }));
      })
    ))
  ));

  updateNewsfeed = createEffect(() => this.actions$.pipe(
    ofType(_newfeedActions.newsfeedUpdate),
    mergeMap(action => this.newsfeedApi.updateNewsfeed(action.newsfeed).pipe(
      map(newsfeed => {
        return _newfeedActions.newsfeedUpdatedSuccessfully({newsfeed});
      }),
      catchError(e => {
        return of(_newfeedActions.newsfeedListLoadingFailed({
          errorMessage: 'There was a problem while favoriting newsfeed.'
        }));
      })
    ))
  ));

  constructor(
    private actions$: Actions,
    private newsfeedApi: NewsfeedService,
  ) {
  }

}
