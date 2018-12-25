import { Component, OnInit } from '@angular/core';
import myFunction from 'src/app/javascipt_stuff/myFunction.js'; // Importing

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
    const pixiWindow = document.getElementById('pixi-window').appendChild(this.app.view);
    const basicText = new PIXI.Text('Basic text in pixi');
    console.log(myFunction(1, 2));
    basicText.x = 30;
    basicText.y = 90;

    this.app.stage.addChild(basicText);
  }
}
