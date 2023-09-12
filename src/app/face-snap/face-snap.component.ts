import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.css'],
})
export class FaceSnapComponent implements OnInit {

  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  buttonText!: string;

  ngOnInit() {

    this.title = 'mathis';
    this.description = 'moi meme';
    this.createdDate = new Date();
    this.snaps = 5;
    this.imageUrl =
      'https://images.assetsdelivery.com/compings_v2/uasumy/uasumy1701/uasumy170100015.jpg';
    this.buttonText = 'Oh Snap !!';
  }

  onClickSnap() {
    if(this.buttonText=='Oh Snap !!'){
      this.snaps++;
      this.buttonText='Oops un Snap';
    }
    else{
      this.snaps--;
      this.buttonText='Oh Snap !!';
    }
   
  }

}
