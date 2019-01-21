declare var PIXI: any;

export namespace Component {

    export class AbstractComponent {
        pixi_app;
        text_string;

        constructor(app, text: string) {
            this.pixi_app = app;
            this.text_string =  new PIXI.Text(text);
        }

        set_position(x: number, y: number) {
            this.text_string.x = x;
            this.text_string.y = y;
        }

        display_text() {
            alert(this.text_string.text);
            this.pixi_app.stage.addChild(this.text_string);
        }
    }
}


