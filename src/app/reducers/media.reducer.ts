import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action } from '@ngrx/store';
import { KindType } from '../models';

export interface MediaEntity {
  id: string;
  title: string;
  kind: KindType;
  recommendedBy: string;
  consumed: boolean;
  dateConsumed: null | string;
}

export interface MediaState extends EntityState<MediaEntity> {

}

export const adapter = createEntityAdapter<MediaEntity>();

// const initialState = adapter.getInitialState();
const initialState: MediaState = {
  ids: ['1', '2'],
  entities: {
    1: { id: '1', title: 'Fallout 3', kind: 'game', recommendedBy: 'Byron', consumed: false, dateConsumed: null },
    2: { id: '2', title: 'Sabrina', kind: 'show', recommendedBy: 'Henry', consumed: true, dateConsumed: '2020-07-01T14:42:29.993Z' }
  }
};

const reducerFunction = createReducer(
  initialState
);

export function reducer(state: MediaState = initialState, action: Action): MediaState {
  return reducerFunction(state, action);
}



