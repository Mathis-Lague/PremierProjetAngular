import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';
// penser à toujours importer sinon bug

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit { //implementer OnInit pour initialiser les variables
  mySnap!:FaceSnap;
  myOtherSnap!:FaceSnap;
  
  ngOnInit(){//méthode utlisée quand les données sont initialisées
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
