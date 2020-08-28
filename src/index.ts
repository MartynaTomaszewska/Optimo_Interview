import * as PIXI from 'pixi.js'
import { keyHandler, KeyData } from './control/keyHandler';

import * as config from './config.json';
import { FoodItem } from './gameObjects/FoodItem';
import { Size } from './helpers/size';
import { random } from './helpers/random';
import { PlayerTextures, MoveState, Player } from './gameObjects/Player';
import { UI } from './ui/UI';
import { BackgroundTextures, BackgroundType, Background } from './gameObjects/Background';

enum GameState {
    STARTED,
    FAILED,
}

export class Game {
    private gameState: GameState = GameState.STARTED;
    private app: PIXI.Application;
    private player: Player | undefined = undefined;
    private background: Background | undefined;
    private foodItems: FoodItem[] = [];
    private ui: UI;
    private windowSize: Size = config.windowSize;
    private generateFoodInterval: number = 0;
    private levelChangeInterval: number = 0;
    private arrowLeftHandler: KeyData | undefined;
    private arrowRightHandler: KeyData | undefined;
    private failCounter: number = 0;
    private level: number = 0;

    public constructor() {
        this.app = new PIXI.Application({ width: this.windowSize.width, height: this.windowSize.height, backgroundColor: 0xFFFFFF });
        document.body.appendChild(this.app.view);

        this.ui = new UI(this.windowSize);
        this.ui.registerStartAgainOnClick(this.restartGame.bind(this));

        this.app.loader.add("hero", "./assets/sprites/hero.json")
            .add("backgroundGame", "./assets/graphics/background_1.png")
            .add("backgroundMenu", "./assets/graphics/background_3.png")
            .add("food", "./assets/sprites/food.json")
            .load(this.onAssetsLoaded.bind(this));
    }

    private clearStage(): void {
        this.foodItems = [];
        this.player?.reset();

        while (this.app.stage.children[0]) {
            this.app.stage.removeChild(this.app.stage.children[0]);
        }

        clearInterval(this.generateFoodInterval);
        clearInterval(this.levelChangeInterval);

        if (this.arrowLeftHandler?.unsubscribe) {
            this.arrowLeftHandler.unsubscribe();
        }
        if (this.arrowRightHandler?.unsubscribe) {
            this.arrowRightHandler.unsubscribe();
        }
    }

    private restartGame(): void {
        this.changeState(GameState.STARTED);
    }

    private gameOver(): void {
        this.background?.typeChanged(BackgroundType.MENU);

        if (this.background) {
            this.app.stage.addChild(this.background.sprite);
        }
        this.app.stage.addChild(this.ui.gameOverHeading);
        this.app.stage.addChild(this.ui.gameOverText);
        this.app.stage.addChild(this.ui.startAgainText);
    }

    private gameStarted(): void {
        this.background?.typeChanged(BackgroundType.GAME);
        this.ui.setScore(0);
        this.failCounter = 0;
        this.level = 0;

        if (this.background) {
            this.app.stage.addChild(this.background.sprite);
        }
        if (this.player) {
            this.app.stage.addChild(this.player.sprite);
        }
        this.app.stage.addChild(this.ui.scoreText);

        this.generateFoodInterval = setInterval(this.generateFood.bind(this), config.foodGenerationInterval);
        this.levelChangeInterval = setInterval(this.newLevel.bind(this), config.levelChangeTime);

        this.setupKeyboardControl();
    }

    private changeState(newState: GameState): void {
        this.clearStage();
        if (this.gameState === GameState.STARTED && newState === GameState.FAILED) {
            this.gameOver();
        } else if (this.gameState === GameState.FAILED && newState === GameState.STARTED) {
            this.gameStarted();
        }
        this.gameState = newState;
    }

    private onAssetsLoaded(): void {
        // Background loading
        const backgroundTextures: BackgroundTextures = {
            [BackgroundType.MENU]: PIXI.Texture.from('backgroundMenu'),
            [BackgroundType.GAME]: PIXI.Texture.from('backgroundGame'),
        }
        this.background = new Background(backgroundTextures, this.windowSize);
        this.app.stage.addChild(this.background.sprite);

        // Player loading
        const idleFrames: PIXI.Texture[] = [];
        const leftFrames: PIXI.Texture[] = [];
        const rightFrames: PIXI.Texture[] = [];

        for (let i = 0; i < 4; i++) {
            idleFrames.push(PIXI.Texture.from(`knight iso char_idle_${i}.png`));
        }

        for (let i = 0; i < 6; i++) {
            leftFrames.push(PIXI.Texture.from(`knight iso char_run left_${i}.png`));
        }

        for (let i = 0; i < 6; i++) {
            rightFrames.push(PIXI.Texture.from(`knight iso char_run right_${i}.png`));
        }

        const playerTextures: PlayerTextures = {
            [MoveState.IDLE]: idleFrames,
            [MoveState.LEFT]: leftFrames,
            [MoveState.RIGHT]: rightFrames,
        }
        this.player = new Player(playerTextures, config.playerSpeed, config.playerAnimationSpeed, config.playerPositionY, this.windowSize, config.playerMargin);

        this.gameStarted();

        this.app.ticker.add(() => {
            if (this.gameState === GameState.STARTED) {
                this.player?.update();
                this.updateFood();
                this.checkCollisions();
                this.removeOldFood();
            }
        });
    }

    private checkCollisions() {
        if (this.player) {
            for (const foodItem of this.foodItems) {
                if (foodItem.position().x >= this.player.position().x - config.playerWidth / 2 &&
                    foodItem.position().x <= this.player.position().x + config.playerWidth / 2 &&
                    foodItem.position().y >= this.player.position().y - config.playerWidth &&
                    foodItem.position().y <= this.player.position().y) {
                    foodItem.markedToRemove = true;
                    this.ui.addScore(1);
                }
            }
        }

    }

    private updateFood() {
        for (const foodItem of this.foodItems) {
            foodItem.update();
        }
    }

    private increaseFailCounter() {
        this.failCounter++;
        if (this.failCounter >= config.failCountMax) {
            this.changeState(GameState.FAILED);
        }
    }

    private generateFood() {
        const foodSpeed = config.foodInitialSpeed + (config.foodSpeedIncrease * this.level);
        const foodItemIndex = random(0, config.foodTypes.length);
        const sprite = PIXI.Sprite.from(`${config.foodTypes[foodItemIndex]}.png`);
        const foodItem = new FoodItem(sprite, foodSpeed, this.windowSize, config.foodMargin, this.increaseFailCounter.bind(this));

        this.foodItems.push(foodItem);
        this.app.stage.addChild(foodItem.sprite);
    }

    private removeOldFood() {
        const foodItemsToRemove = this.foodItems.filter((item) => item.markedToRemove === true);
        const foodSpritesToRemove = foodItemsToRemove.map((item) => item.sprite);
        for (const foodSprite of foodSpritesToRemove) {
            this.app.stage.removeChild(foodSprite);
        }
        this.foodItems = this.foodItems.filter((item) => !item.markedToRemove);
    }

    private setupKeyboardControl(): void {
        this.arrowLeftHandler = keyHandler('ArrowLeft',
            () => this.player?.moveStateChanged(MoveState.LEFT),
            () => this.player?.moveStateChanged(MoveState.IDLE));

        this.arrowRightHandler = keyHandler('ArrowRight',
            () => this.player?.moveStateChanged(MoveState.RIGHT),
            () => this.player?.moveStateChanged(MoveState.IDLE));
    }

    private newLevel(): void {
        this.level += 1;
    }
}

window.onload = function () {
    new Game();
}

window.PIXI = PIXI