import {
    Stage,
    game,
    ColorLayer,
    BitmapText,
    event,
    state,
} from 'melonjs';

class TitleScreen extends Stage {
    /**
     *  action to perform on state change
     */
    onResetEvent() {
         // add a gray background to the default Stage
        game.world.addChild(new ColorLayer("background", "#202020"));

        const spacing = 50;
        // add a font text display object
        game.world.addChild(new BitmapText(game.viewport.width / 2, game.viewport.height / 2 - spacing,  {
            font : "PressStart2P",
            size : 4.0,
            textBaseline : "middle",
            textAlign : "center",
            text : "Fox and Goose"
        }));

        // add a font text display object
        game.world.addChild(new BitmapText(game.viewport.width / 2, game.viewport.height / 2 + spacing,  {
            font : "PressStart2P",
            size : 1.0,
            textBaseline : "middle",
            textAlign : "center",
            text : "A strategic paper game"
        }));

        // add a font text display object
        game.world.addChild(new BitmapText(game.viewport.width / 2, game.viewport.height - spacing,  {
            font : "PressStart2P",
            size : 1.0,
            textBaseline : "middle",
            textAlign : "center",
            text : "Press any key to start"
        }));

        this.handler = event.on(event.KEYDOWN, (action, keyCode) => {
            if ( action === 'enter' || keyCode === 13 ) {
                state.change(state.PLAY)
            }
        })

    }

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent() {
        event.off(event.KEYDOWN, this.handler)
    }
};

export default TitleScreen;
