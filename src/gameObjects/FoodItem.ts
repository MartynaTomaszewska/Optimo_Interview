import * as PIXI from 'pixi.js'
import { Size } from '../helpers/size';
import { random } from '../helpers/random';

export class FoodItem {
    private speed: number = 0;
    private windowSize: Size;
    private foodMissedHandler: Function;

    public sprite: PIXI.Sprite;
    public markedToRemove: boolean = false;

    public constructor(sprite: PIXI.Sprite, speed: number, windowSize: Size, margin: number, foodMissedHandler: Function) {
        this.sprite = sprite;
        this.speed = speed;
        this.windowSize = windowSize;

        this.sprite.position.x = random(margin, this.windowSize.width - margin);
        this.sprite.position.y = 0;

        this.foodMissedHandler = foodMissedHandler;
    }

    public update(): void {
        this.sprite.position.y += this.speed;
        if (this.sprite.position.y > this.windowSize.height) {
            this.markedToRemove = true;
            this.foodMissedHandler();
        }
    }

    public position(): PIXI.ObservablePoint {
        return this.sprite.position;
    }
}