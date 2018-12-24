import { Component, OnInit } from '@angular/core';
declare var PIXI: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  public app: any;

  constructor() {
  }

  ngOnInit() {
    this.app = new PIXI.Application(window.innerWidth / 2, window.innerHeight, { backgroundColor: 0xFFFFFF });
    let leftPanel = document.getElementById('pixi-window').appendChild(this.app.view);
    let basicText = new PIXI.Text('Basic text in pixi');
    basicText.x = 30;
    basicText.y = 90;

    this.app.stage.addChild(basicText);
  }
}
