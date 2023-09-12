import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiSelectModule } from 'primeng/multiselect';
import { FaceSnapComponent } from './face-snap/face-snap.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MultiSelectModule,
  ],
  declarations: [AppComponent, FaceSnapComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
