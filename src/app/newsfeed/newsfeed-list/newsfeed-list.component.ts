import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { NewsfeedState, Newsfeed, NewsfeedType } from 'src/app/model';

@Component({
  selector: 'app-newsfeed-list',
  templateUrl: './newsfeed-list.component.html',
  styleUrls: ['./newsfeed-list.component.scss']
})
export class NewsfeedListComponent implements OnInit {

  @Input()newsfeedState!: NewsfeedState;
  @Output()favoriteNewsfeedEmitter = new EventEmitter<Newsfeed>();
  newsfeedType = NewsfeedType;

  constructor() { }

  ngOnInit(): void {
  }

  favoriteNewsfeed(newsfeed: Newsfeed): void {
    this.favoriteNewsfeedEmitter.emit({...newsfeed, isFavourite: !newsfeed.isFavourite});
  }


}
