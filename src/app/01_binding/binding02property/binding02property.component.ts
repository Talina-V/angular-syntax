import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding02property',
  templateUrl: './binding02property.component.html',
  styleUrls: ['./binding02property.component.css']
})
export class Binding02PropertyComponent implements OnInit {

  
  constructor() { }

  AngularImage: string = '../../../assets/angular.jpeg';
  AngularImageWidth: number = 300;

  ReactImage: string = 'assets/react.png';
  ReactImageWidth: number = 250;

  //-----------------------------------------------

  flag = false;

  ngOnInit() {
  }

}
