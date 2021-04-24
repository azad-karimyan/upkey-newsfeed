import { NewsfeedType } from './entities.model';

export interface Newsfeed {
    id: number;
    type: NewsfeedType;
    person: string;
    personId: number;
    secondPerson: string;
    secondPersonId: number;
    isFavourite: boolean;
}
