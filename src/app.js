import Phaser from 'phaser';

const game = new Phaser.Game(800, 600, Phaser.AUTO, 'app', { preload: preload, create: create, update: update });

function preload() {
    game.load.image('logo', 'phaser.png');
}

function create() {
    const logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);
}

function update() {
}
