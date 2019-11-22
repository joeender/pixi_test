declare var PIXI: any;
import * as interactivity from './Interactivity'; // Importing

export namespace Piece {

    export class AbstractPiece {
        pixi_app;
        sprite;
        name: string;
        num_value: number;
        details: {};
        constructor(app) {
            this.pixi_app = app;
        }

        set_sprite(sprite) {
            this.sprite = sprite;
        }

        set_position(x, y) {
            this.sprite.position.x = x;
            this.sprite.position.y = y;
        }

        make_draggable() {
            this.sprite.interactive = true;
            // this button mode will mean the hand cursor appears when you roll over the bunny with your mouse
            this.sprite.buttonMode = true;
            // center the bunny's anchor point
            this.sprite.anchor.set(0.5);
            // setup events
            this.sprite
                // events for drag start
                .on('mousedown', interactivity.onDragStart)
                .on('touchstart', interactivity.onDragStart)
                // events for drag end
                .on('mouseup', interactivity.onDragEnd)
                .on('mouseupoutside', interactivity.onDragEnd)
                .on('touchend', interactivity.onDragEnd)
                .on('touchendoutside', interactivity.onDragEnd)
                // events for drag move
                .on('mousemove', interactivity.onDragMove)
                .on('touchmove', interactivity.onDragMove);
        }

        render() {
            this.pixi_app.stage.addChild(this.sprite);
        }
    }
}


