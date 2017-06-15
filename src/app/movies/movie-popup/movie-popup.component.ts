import { Component, Inject,  OnInit } from '@angular/core';
import {MdDialogRef , MD_DIALOG_DATA, MdButtonModule} from '@angular/material';
import {baseImgrUrl} from '../each-movie/each-movie.component';

@Component({
  selector: 'app-movie-popup',
  templateUrl: './movie-popup.component.html',
  styleUrls: ['./movie-popup.component.css'],

})

export class MoviePopupComponent implements OnInit {
  baseImgrUrl: string = baseImgrUrl;

  constructor(public dialogRef: MdDialogRef<MoviePopupComponent>, @Inject(MD_DIALOG_DATA) public data: any) {}

  ngOnInit() {
  }

}
