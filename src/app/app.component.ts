import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    const config = {
      apiKey: 'AIzaSyA8VPHwjdqRNyWulHcxxY0I8xXeRoF6_aY',
      authDomain: 'myblog-eb523.firebaseapp.com',
      databaseURL: 'https://myblog-eb523.firebaseio.com',
      projectId: 'myblog-eb523',
      storageBucket: 'myblog-eb523.appspot.com',
      messagingSenderId: '278498783048'
    };
    firebase.initializeApp(config);
  }
	
}
