import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthActionTypes } from './auth.actions';

@Injectable()
export class AuthEffects {

  @Effect()
  loadAuths$ = this.actions$.pipe(ofType(AuthActionTypes.LoadAuths));

  constructor(private actions$: Actions) {}
}
