import { Boot } from './scenes/Boot';
import { ClickerGame } from './scenes/ClickerGame';
import { Game } from 'phaser';
import { GameOver } from './scenes/GameOver';
import { MainMenu } from './scenes/MainMenu';
import { Preloader } from './scenes/Preloader';
import { Bugfender } from '@bugfender/sdk';

Bugfender.init({
    appKey: "51xntK1ezjJhyy2JTQJyl1EwePsEJWsZ",
    overrideConsoleMethods: false,
    logBrowserEvents: false,
    logUIEvents: false,
});

//  Find out more information about the Game Config at: https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config = {
    type: Phaser.AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 400 }
        }
    },
    scene: [
        Boot,
        Preloader,
        MainMenu,
        ClickerGame,
        GameOver
    ]
};

export default new Game(config);
