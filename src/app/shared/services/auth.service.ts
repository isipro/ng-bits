import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  _isLoggedIn$ = new BehaviorSubject(false);

  set isLoggedIn(val: boolean){
    this._isLoggedIn$.next(val);
    console.log('setter called');
  }

  get isLoggedIn(){
    return this._isLoggedIn$.getValue();
  }

  constructor() { }
}
