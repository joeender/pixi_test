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
    const CARD_WIDTH = 81;
    const CARD_HEIGHT = 117;
    const deck = [];
    for (let row = 0; row < 2; row++) {
      for (let col = 0; col < 2; col++) {
        const test_piece = new Piece.AbstractPiece(this.app);
        const texture = new PIXI.Texture(PIXI.Texture.fromImage('assets/sprites/cards_sprite.gif'),
          new PIXI.Rectangle(0, 0, row * CARD_WIDTH, col * CARD_HEIGHT));
        const sprite = new PIXI.Sprite(texture);
        test_piece.set_sprite(sprite);
        test_piece.set_position(row * CARD_WIDTH, col * CARD_HEIGHT);
        test_piece.render();
        deck.push(sprite);
      }
    }


    test_class.set_position(190, 90);
    test_class.display_text();
  }
}
