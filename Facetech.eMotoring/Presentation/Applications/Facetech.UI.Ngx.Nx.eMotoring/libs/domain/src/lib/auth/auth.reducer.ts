import { Action } from '@ngrx/store';
import { AuthActions, AuthActionTypes } from './auth.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {

    case AuthActionTypes.LoadAuths:
      return state;


    default:
      return state;
  }
}
