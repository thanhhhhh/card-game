/// <reference path = "./../../bower_components/phaser-ce/typescript/phaser.d.ts"/>
// import { Phaser } from './../../bower_components/phaser-ce/typescript/phaser';
var MyGame = /** @class */ (function () {
    function MyGame() {
        this.game = new Phaser.Game(700, 700, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
        // this.state.add('Create', this.create, false);
    }
    MyGame.prototype.preload = function () {
        this.game.load.image('mushroom', 'asset/001.png');
    };
    MyGame.prototype.create = function () {
        this.game.add.sprite(100, 100, 'mushroom');
    };
    return MyGame;
}());
window.onload = function () {
    var game = new MyGame();
};
