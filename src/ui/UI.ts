import * as PIXI from 'pixi.js'
import { Size } from '../helpers/size';

const style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff'],
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
});

const buttonStyle = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 48,
    fontWeight: 'bold',
    fill: ['#ffffff'],
    stroke: '#c56500',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
});

export class UI {
    private windowSize: Size;
    private score: number = 0;

    public scoreText: PIXI.Text = new PIXI.Text(`Score: ${this.score}`, style);
    public gameOverHeading: PIXI.Text = new PIXI.Text('Game over!', style);
    public gameOverText: PIXI.Text = new PIXI.Text(`Your score: ${this.score}`, style);
    public startAgainText: PIXI.Text = new PIXI.Text('Start again', buttonStyle);

    public constructor(windowSize: Size) {
        this.windowSize = windowSize;

        this.scoreText.position.x = 10;
        this.scoreText.position.y = 10;

        this.gameOverHeading.position.x = windowSize.width / 2;
        this.gameOverHeading.position.y = windowSize.height / 2 - 100;
        this.gameOverHeading.anchor.set(0.5);

        this.gameOverText.position.x = windowSize.width / 2;
        this.gameOverText.position.y = windowSize.height / 2 - 50;
        this.gameOverText.anchor.set(0.5);

        this.startAgainText.position.x = windowSize.width / 2;
        this.startAgainText.position.y = windowSize.height / 2 + 50;
        this.startAgainText.anchor.set(0.5);
        this.startAgainText.interactive = true;
        this.startAgainText.buttonMode = true;
    }

    public addScore(points: number): void {
        this.setScore(this.score += points);
    }

    public setScore(points: number): void {
        this.score = points;
        this.scoreText.text = `Score: ${this.score}`;
        this.gameOverText.text = `Your score: ${this.score}`;
    }

    public registerStartAgainOnClick(onClick: Function): void {
        this.startAgainText.on('click', onClick);
    }
}