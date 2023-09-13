import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';// penser à toujours importer sinon bug


@Component({
  selector: 'app-face-snap',//hyper important puisque c'est la balise html qui est utilisée
  templateUrl: './face-snap.component.html',
  styleUrls: [ './face-snap.component.scss' ]
})

export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!:FaceSnap;

  imageUrl:string;
  buttonReaction:string;

  ngOnInit(){
    
    this.imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbHF2kIovUEvs9xabxDqQMqajNpwt1Y07hOw&usqp=CAU';
    this.buttonReaction='Oh Snaps !';
  }

  onClickSnap(){
    if(this.buttonReaction=='Oh Snaps !'){
      this.faceSnap.snaps++;//faceSnap devant pour que ca mette a jour pour chaque instance créée.
      this.buttonReaction='Oops deja Snaps !';
    }
    else{
      this.faceSnap.snaps--;
      this.buttonReaction='Oh Snaps !';
    }
  }


}

