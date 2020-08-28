import * as PIXI from 'pixi.js'
import { Size } from '../helpers/size';
import { random } from '../helpers/random';

export enum MoveState {
    LEFT,
    RIGHT,
    IDLE,
}

export interface PlayerTextures {
    [MoveState.IDLE]: PIXI.Texture[],
    [MoveState.LEFT]: PIXI.Texture[],
    [MoveState.RIGHT]: PIXI.Texture[],
}

export class Player {
    private speed: number = 0;
    private windowSize: Size;
    private margin: number;
    private moveState: MoveState = MoveState.IDLE;
    private textures: PlayerTextures;
    private initialPositionY: number;

    public sprite: PIXI.AnimatedSprite;
    public markedToRemove: boolean = false;

    public constructor(textures: PlayerTextures, speed: number, animationSpeed: number, positionY: number, windowSize: Size, margin: number) {
        const idleFrames = textures[MoveState.IDLE];
        this.sprite = new PIXI.AnimatedSprite(idleFrames);
        this.textures = textures;
        this.speed = speed;
        this.windowSize = windowSize;
        this.margin = margin;
        this.initialPositionY = positionY;

        this.sprite.x = this.windowSize.width / 2;
        this.sprite.y = this.initialPositionY;
        this.sprite.anchor.set(0.5);
        this.sprite.animationSpeed = animationSpeed;
        this.sprite.play();
    }

    public update(): void {
        if (this.moveState !== MoveState.IDLE) {
            this.sprite.position.x += this.moveState === MoveState.LEFT ? -this.speed : this.speed;
            if (this.sprite.position.x > this.windowSize.width - this.margin) {
                this.sprite.position.x = this.windowSize.width - this.margin;
            } else if (this.sprite.position.x < this.margin) {
                this.sprite.position.x = this.margin;
            }
        }

        const newTextures = this.textures[this.moveState];
        if (this.sprite.textures !== newTextures) {
            this.sprite.textures = newTextures;
            this.sprite.play();
        }
    }

    public position(): PIXI.ObservablePoint {
        return this.sprite.position;
    }

    public moveStateChanged(newState: MoveState): void {
        this.moveState = newState;
    }

    public reset(): void {
        this.moveStateChanged(MoveState.IDLE);
        this.sprite.x = this.windowSize.width / 2;
        this.sprite.y = this.initialPositionY;
    }
}