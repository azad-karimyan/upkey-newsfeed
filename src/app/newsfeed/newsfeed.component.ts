import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NewsfeedService } from '../api-service/newsfeed/newsfeed.service';
import { AppState, Friend, Newsfeed } from '../model';
import { loadFriendList, newsfeedListLoad, newsfeedUpdate, selectFriend } from '../state/newsfeed.actions';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.scss']
})
export class NewsfeedComponent implements OnInit {

  showSidebar = true;
  newsfeedState$: Observable<AppState>;

  screenIsSmall = false;
  @HostListener('window:resize', ['$event'])onResize(event: Event): void {
    console.log(event);
    this.screenIsSmall = window.innerWidth < 769 ? true : false;
    this.showSidebar = this.screenIsSmall ? false : true;
  }

  constructor(
    private newsfeedApi: NewsfeedService,
    private store: Store<{ newsfeed: AppState }>
    ) {
      this.newsfeedState$ = store.select('newsfeed');
    }

  toggleSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }

  ngOnInit(): void {
    this.store.dispatch(loadFriendList());
    this.store.dispatch(newsfeedListLoad());
  }
  selectFriend(friend: Friend | null): void {
    this.store.dispatch(selectFriend({friend}));
    this.showSidebar = false; 
  }
  updateNewsfeed(newsfeed: Newsfeed): void {
    this.store.dispatch(newsfeedUpdate({newsfeed}));
  }

}
