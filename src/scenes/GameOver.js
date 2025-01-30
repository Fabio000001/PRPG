import { Scene } from 'phaser';

export class GameOver extends Scene {
    constructor() {
        super('GameOver');
    }

    create() {
        //  Get the current highscore from the registry
        const score = this.registry.get('highscore');

        const textStyle = { fontFamily: 'Arial Black', fontSize: 64, color: '#ffffff', stroke: '#000000', strokeThickness: 8 };

        const bicicleta = this.cache.json.get('bicicletas')[1];

        this.add.image(512, 384, 'background');

        this.add.text(512, 300, `Game Over\n\nHigh Score: ${score}`, textStyle).setAlign('center').setOrigin(0.5);

        this.add.text(512, 600, `Bicicleta ${bicicleta.id}\n\nmodelo ${bicicleta.modelo}\n\ncolor ${bicicleta.color}`,
            { fontSize: 32 }).setAlign('center').setOrigin(0.5);

        this.input.once('pointerdown', () => {

            this.scene.start('MainMenu');

        });
    }
}
