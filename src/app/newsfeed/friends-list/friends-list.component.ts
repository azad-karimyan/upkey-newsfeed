import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Friend, FriendsState } from 'src/app/model';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {

  @Input()friendsState!: FriendsState;
  @Output()selectFriendEmitter = new EventEmitter<Friend |null>();
  constructor() { }

  ngOnInit(): void {
  }

  selectFriend(friend: Friend | null): void {
    this.selectFriendEmitter.emit(friend);
  }
}
