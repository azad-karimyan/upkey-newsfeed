import { createAction, props, union } from '@ngrx/store';
import { Friend, Newsfeed } from '../model';

export const loadFriendList = createAction(
    '[newsfeed component] load friend list'
    );
export const frindListLoadedSuccessfully = createAction(
    '[newsfeed effect] load friend list completed successfully',
    props<{list: Friend[]}>()
    );
export const frindListLoadingFailed = createAction(
    '[newsfeed effect] load friend list completed with error',
    props<{ errorMessage: string }>()
    );
export const newsfeedListLoad = createAction(
    '[newsfeed component] load newsfeed list'
    );
export const newsfeedListLoadedSuccessfully = createAction(
    '[newsfeed component] load newsfeed list completed successfully',
    props<{list: Newsfeed[]}>()
    );
export const newsfeedListLoadingFailed = createAction(
    '[newsfeed component] load newsfeed list completed with error',
    props<{ errorMessage: string }>()
    );
export const newsfeedUpdate = createAction(
    '[newsfeed component] update newsfeed',
    props<{newsfeed: Newsfeed}>()
);
export const newsfeedUpdatedSuccessfully = createAction(
    '[newsfeed component] update newsfeed completed successfully',
    props<{newsfeed: Newsfeed}>()
);
export const newsfeedUpdatingfailed = createAction(
    '[newsfeed component] update newsfeed completed with error',
    props<{errorMessage: string}>()
);
export const selectFriend = createAction(
    '[newsfeed component] select a friend and filter newsfeed',
    props<{friend: Friend | null}>()
);

const actions = union({
    loadFriendList,
    frindListLoadedSuccessfully,
    frindListLoadingFailed,
    newsfeedListLoad,
    newsfeedListLoadedSuccessfully,
    newsfeedListLoadingFailed,
    newsfeedUpdate,
    newsfeedUpdatedSuccessfully,
    newsfeedUpdatingfailed,
    selectFriend
});

export type NewsfeedActions = typeof actions;
