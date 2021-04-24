import { Friend } from './friend.model';
import { Newsfeed } from './newsfeed.model';

export interface AppState {
    newsfeed: NewsfeedState;
    updatingNewsfeed: {
        newsfeed?: Newsfeed;
        isUpdating: boolean;
    };
    friends: FriendsState;
}


export interface FriendsState {
    isLoading: boolean;
    list: Friend[];
    selectedFriend: Friend | null;
}

export interface NewsfeedState {
    isLoading: boolean;
    list: Newsfeed[];
    showingList: Newsfeed[];
}
