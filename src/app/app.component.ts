import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  mySnap!:FaceSnap;
  myOtherSnap!:FaceSnap;
  
  ngOnInit(){
    this.mySnap=new FaceSnap(
      'arnaud',
      'mon pote',
      new Date(),
      10,
    );
    this.myOtherSnap=new FaceSnap(
      'jean',
      'mon autre pote',
      new Date(),
      15,
    );
  }
}
