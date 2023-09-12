import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.css'],
})
export class FaceSnapComponent implements OnInit{
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;

  ngOnInit(){
    this.title = 'mathis';
    this.description = 'moi meme';
    this.createdDate = new Date();
    this.snaps = 5;
  }

}
