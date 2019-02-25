declare var PIXI: any;

export namespace Piece {

    export class AbstractPiece {
        pixi_app;
        sprite;

        constructor(app) {
            this.pixi_app = app;
        }

        set_sprite(sprite) {
            this.sprite = sprite;
        }

        render() {
            this.pixi_app.stage.addChild(this.sprite);
        }
    }
}


