/// <reference path = "./../../bower_components/phaser-ce/typescript/phaser.d.ts"/>

// import { Phaser } from './../../bower_components/phaser-ce/typescript/phaser';
 
    class MyGame {
         
        constructor(){
           
            this.game = new Phaser.Game(700,700, Phaser.AUTO, 'content', {preload: this.preload, create: this.create });
            // this.state.add('Create', this.create, false);
        }
 
        game: Phaser.Game;

        preload(){
            this.game.load.image('mushroom','asset/001.png');
        }

        create(){
            this.game.add.sprite(100,100, 'mushroom');
        }

    
        
    }
    window.onload = () => {
        let game = new MyGame();
    }
 