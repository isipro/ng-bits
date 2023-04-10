import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn$ = new BehaviorSubject(false);

  set isLoggedIn(val: boolean){
    this.isLoggedIn$.next(val);
    console.log('setter called');
  }

  get isLoggedIn(){
    return this.isLoggedIn$.getValue();
  }

  constructor() { }
}
