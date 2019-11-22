import { Component, OnInit } from '@angular/core';
// import myFunction from 'src/app/javascipt_stuff/myClass.js'; // Importing
import { EventManager } from 'src/app/boardgame/EventManager.js'; // Importing
import { Card } from 'src/app/boardgame/Card.js'; // Importing

declare var PIXI: any;
const renderer = PIXI.autoDetectRenderer(800, 600);
document.body.appendChild(renderer.view);

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
    const DECK_SIZE = 52;

    let display_height = CARD_HEIGHT;
    let display_width = CARD_WIDTH;
    const deck = [];

    let card_count = 0;
    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 13; col++) {
        const card = new Card(this.app);
        const texture = new PIXI.Texture(PIXI.Texture.fromImage('assets/sprites/cards_sprite.gif'),
          new PIXI.Rectangle(col * CARD_WIDTH, row * CARD_HEIGHT, CARD_WIDTH, CARD_HEIGHT));
        const sprite = new PIXI.Sprite(texture);
        card.set_sprite(sprite);
        deck.push(card);
        card_count += 1;
        if (card_count >= DECK_SIZE) {
          break;
        }
      }
      if (card_count >= DECK_SIZE) {
        break;
      }
    }

    for (let i = 0; i < deck.length; i++) {
      if (i === 6) {
        display_height += CARD_HEIGHT;
        display_width = 0;
      }
      deck[i].set_position(i * (display_width + 6), display_height);
      deck[i].make_draggable();
      deck[i].render();
    }

    test_class.set_position(190, 90);
    test_class.display_text();
  }
}
