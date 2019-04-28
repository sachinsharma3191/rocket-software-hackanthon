import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyClbYhiX-oQbxs8UJzG6rbbmePYDz0GK80",
  authDomain: "rocket-build.firebaseapp.com",
  databaseURL: "https://rocket-build.firebaseio.com",
  projectId: "rocket-build",
  storageBucket: "rocket-build.appspot.com",
  messagingSenderId: "269786933365"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements   OnInit {
  title = 'rocket-build';

    ngOnInit(){
        firebase.initializeApp(config);
    }
}
