import { Component, OnInit } from '@angular/core';
// import myFunction from 'src/app/javascipt_stuff/myClass.js'; // Importing
import { EventManager } from 'src/app/boardgame/EventManager.js'; // Importing
import { Piece } from 'src/app/boardgame/Piece.js'; // Importing

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
    const test_class = new EventManager.EventDisplayText(this.app, 'hello');
    const test_piece = new Piece.AbstractPiece(this.app);
    const texture = new PIXI.Texture(PIXI.Texture.fromImage('assets/sprites/cards_sprite.gif'), new PIXI.Rectangle(0, 0, 100, 100));
    const sprite = new PIXI.Sprite(texture);
    test_piece.set_sprite(sprite);
    test_piece.render();
    test_class.set_position(190, 90);
    test_class.display_text();
  }
}
