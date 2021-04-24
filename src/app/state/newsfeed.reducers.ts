import { createReducer, on } from '@ngrx/store';
import { AppState } from '../model';
import {
    loadFriendList,
    frindListLoadedSuccessfully,
    frindListLoadingFailed,
    newsfeedListLoad,
    newsfeedListLoadedSuccessfully,
    newsfeedListLoadingFailed,
    newsfeedUpdate,
    newsfeedUpdatedSuccessfully,
    newsfeedUpdatingfailed,
    selectFriend,
} from './newsfeed.actions';

export const initialState: AppState = {
    newsfeed: {
        isLoading: false,
        list: [],
        showingList: []
    },
    updatingNewsfeed: {
        isUpdating: false
    },
    friends: {
        isLoading: false,
        list: [],
        selectedFriend: null
    }
};

export const newsfeedReducer = createReducer(
    initialState,
    on(
        loadFriendList,
        (state) => {
            return {
                ...state,
                friends: {
                    ...state.friends,
                    isLoading: true
                }
            };
        }
    ),
    on(
        frindListLoadedSuccessfully,
        (state, prop) => {
            return {
                ...state,
                friends: {
                    isLoading: false,
                    list: prop.list,
                    selectedFriend: null
                }
            };
        }
    ),
    on(
        frindListLoadingFailed,
        (state, prop) => {
            return {
                ...state,
                friends: {
                    ...state.friends,
                    isLoading: false
                }
            };
        }
    ),
    on(
        newsfeedListLoad,
        (state) => {
            return {
                ...state,
                newsfeed: {
                    ...state.newsfeed,
                    isLoading: true
                }
            };
        }
    ),
    on(
        newsfeedListLoadedSuccessfully,
        (state, props) => {
            return {
                ...state,
                newsfeed: {
                    isLoading: false,
                    list: props.list,
                    showingList: props.list
                }
            };
        }
    ),
    on(
        newsfeedListLoadingFailed,
        (state, prop) => {
            return {
                ...state,
                newsfeed: {
                    ...state.newsfeed,
                    isLoading: false
                }
            };
        }
    ),
    on(
        selectFriend,
        (state, props) => {
            return {
                ...state,
                friends: {
                    ...state.friends,
                    selectedFriend: props.friend
                },
                newsfeed: {
                    ...state.newsfeed,
                    showingList: state.newsfeed.list.filter(i => {
                        if (props.friend) {
                            return i.personId === props.friend?.id;
                        } else {
                            return true;
                        }
                    })
                }
            };
        }
    ),
    on(
        newsfeedUpdate,
        (state, prop) => {
            return {
                ...state,
                updatingNewsfeed: {
                    isUpdating: true,
                    newsfeed: prop.newsfeed
                }
            };
        }
    ),
    on(
        newsfeedUpdatedSuccessfully,
        (state, prop) => {
            return {
                ...state,
                newsfeed: {
                    ...state.newsfeed,
                    list: state.newsfeed.list.map(i => {
                        return i.id === prop.newsfeed.id ? prop.newsfeed : i;
                    }),
                    showingList: state.newsfeed.list.map(i => {
                        return i.id === prop.newsfeed.id ? prop.newsfeed : i;
                    }).filter(i => {
                        if (state.friends.selectedFriend) {
                            return i.personId === state.friends.selectedFriend?.id;
                        } else {
                            return true;
                        }
                    }),
                },
                updatingNewsfeed: {
                    isUpdating: false,
                    newsfeed: undefined
                },
            };
        }
    ),
    on(
        newsfeedUpdatingfailed,
        (state, prop) => {
            return {
                ...state,
                updatingNewsfeed: {
                    isUpdating: false,
                    newsfeed: undefined
                }
            };
        }
    )
);
