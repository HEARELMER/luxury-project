import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  private _darkMode = new BehaviorSubject<boolean>(window.matchMedia('(prefers-color-scheme: dark)').matches);
    isDarkMode = this._darkMode.asObservable();
  
    toggleMode() {
      this._darkMode.next(!this._darkMode.value);
    }
}


// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ThemeService {
//   private _darkMode = new BehaviorSubject<boolean>(window.matchMedia('(prefers-color-scheme: dark)').matches);
//   isDarkMode = this._darkMode.asObservable();

//   toggleMode() {
//     this._darkMode.next(!this._darkMode.value);
//   }
// }