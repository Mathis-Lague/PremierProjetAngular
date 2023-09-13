import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';
// penser à toujours importer sinon bug

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit { //implementer OnInit pour initialiser les variables
  faceSnaps!:FaceSnap[];
  mySnap!:FaceSnap;
  myOtherSnap!:FaceSnap;
  
  ngOnInit(){//méthode utlisée quand les données sont initialisées
    this.faceSnaps=[
      this.mySnap={
        titre:'arnaud',
        description:'mon pote',
        createdDate:new Date(),
        snaps:310,
        location:'Paris',
      },
      this.myOtherSnap={
        titre:'jean',
        description:'mon autre pote',
        createdDate:new Date(),
        snaps:150,
    
      },
      this.mySnap={
        titre:'arnaud',
        description:'mon pote',
        createdDate:new Date(),
        snaps:10,
        location:'Paris',
      },
      this.myOtherSnap={
        titre:'jean',
        description:'mon autre pote',
        createdDate:new Date(),
        snaps:15,
    
      }
      
    ]
    
  }
}
