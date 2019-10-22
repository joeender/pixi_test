import { Piece } from './Piece.js'; // Importing
import { interaction } from 'pixi.js';

export class Card extends Piece.AbstractPiece {
    is_front: Boolean;
    back_texture;
    constructor(app) {
      super(app);
      this.is_front = true;
    }
    flip() {
        this.is_front = !(this.is_front);
    }
}
