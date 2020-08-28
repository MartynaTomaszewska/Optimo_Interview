(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("PIXI"));
	else if(typeof define === 'function' && define.amd)
		define("optimo_interview", ["PIXI"], factory);
	else if(typeof exports === 'object')
		exports["optimo_interview"] = factory(require("PIXI"));
	else
		root["optimo_interview"] = factory(root["PIXI"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.random = void 0;
exports.random = function (min, max) {
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var PIXI = __importStar(__webpack_require__(0));
var keyHandler_1 = __webpack_require__(4);
var config = __importStar(__webpack_require__(5));
var FoodItem_1 = __webpack_require__(6);
var random_1 = __webpack_require__(1);
var Player_1 = __webpack_require__(7);
var UI_1 = __webpack_require__(8);
var Background_1 = __webpack_require__(9);
var GameState;
(function (GameState) {
    GameState[GameState["STARTED"] = 0] = "STARTED";
    GameState[GameState["FAILED"] = 1] = "FAILED";
})(GameState || (GameState = {}));
var Game = /** @class */ (function () {
    function Game() {
        this.gameState = GameState.STARTED;
        this.player = undefined;
        this.foodItems = [];
        this.windowSize = config.windowSize;
        this.generateFoodInterval = 0;
        this.levelChangeInterval = 0;
        this.failCounter = 0;
        this.level = 0;
        this.app = new PIXI.Application({ width: this.windowSize.width, height: this.windowSize.height, backgroundColor: 0xFFFFFF });
        document.body.appendChild(this.app.view);
        this.ui = new UI_1.UI(this.windowSize);
        this.ui.registerStartAgainOnClick(this.restartGame.bind(this));
        this.app.loader.add("hero", "./assets/sprites/hero.json")
            .add("backgroundGame", "./assets/graphics/background_1.png")
            .add("backgroundMenu", "./assets/graphics/background_3.png")
            .add("food", "./assets/sprites/food.json")
            .load(this.onAssetsLoaded.bind(this));
    }
    Game.prototype.clearStage = function () {
        var _a, _b, _c;
        this.foodItems = [];
        (_a = this.player) === null || _a === void 0 ? void 0 : _a.reset();
        while (this.app.stage.children[0]) {
            this.app.stage.removeChild(this.app.stage.children[0]);
        }
        clearInterval(this.generateFoodInterval);
        clearInterval(this.levelChangeInterval);
        if ((_b = this.arrowLeftHandler) === null || _b === void 0 ? void 0 : _b.unsubscribe) {
            this.arrowLeftHandler.unsubscribe();
        }
        if ((_c = this.arrowRightHandler) === null || _c === void 0 ? void 0 : _c.unsubscribe) {
            this.arrowRightHandler.unsubscribe();
        }
    };
    Game.prototype.restartGame = function () {
        this.changeState(GameState.STARTED);
    };
    Game.prototype.gameOver = function () {
        var _a;
        (_a = this.background) === null || _a === void 0 ? void 0 : _a.typeChanged(Background_1.BackgroundType.MENU);
        if (this.background) {
            this.app.stage.addChild(this.background.sprite);
        }
        this.app.stage.addChild(this.ui.gameOverHeading);
        this.app.stage.addChild(this.ui.gameOverText);
        this.app.stage.addChild(this.ui.startAgainText);
    };
    Game.prototype.gameStarted = function () {
        var _a;
        (_a = this.background) === null || _a === void 0 ? void 0 : _a.typeChanged(Background_1.BackgroundType.GAME);
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
    };
    Game.prototype.changeState = function (newState) {
        this.clearStage();
        if (this.gameState === GameState.STARTED && newState === GameState.FAILED) {
            this.gameOver();
        }
        else if (this.gameState === GameState.FAILED && newState === GameState.STARTED) {
            this.gameStarted();
        }
        this.gameState = newState;
    };
    Game.prototype.onAssetsLoaded = function () {
        var _a, _b;
        var _this = this;
        // Background loading
        var backgroundTextures = (_a = {},
            _a[Background_1.BackgroundType.MENU] = PIXI.Texture.from('backgroundMenu'),
            _a[Background_1.BackgroundType.GAME] = PIXI.Texture.from('backgroundGame'),
            _a);
        this.background = new Background_1.Background(backgroundTextures, this.windowSize);
        this.app.stage.addChild(this.background.sprite);
        // Player loading
        var idleFrames = [];
        var leftFrames = [];
        var rightFrames = [];
        for (var i = 0; i < 4; i++) {
            idleFrames.push(PIXI.Texture.from("knight iso char_idle_" + i + ".png"));
        }
        for (var i = 0; i < 6; i++) {
            leftFrames.push(PIXI.Texture.from("knight iso char_run left_" + i + ".png"));
        }
        for (var i = 0; i < 6; i++) {
            rightFrames.push(PIXI.Texture.from("knight iso char_run right_" + i + ".png"));
        }
        var playerTextures = (_b = {},
            _b[Player_1.MoveState.IDLE] = idleFrames,
            _b[Player_1.MoveState.LEFT] = leftFrames,
            _b[Player_1.MoveState.RIGHT] = rightFrames,
            _b);
        this.player = new Player_1.Player(playerTextures, config.playerSpeed, config.playerAnimationSpeed, config.playerPositionY, this.windowSize, config.playerMargin);
        this.gameStarted();
        this.app.ticker.add(function () {
            var _a;
            if (_this.gameState === GameState.STARTED) {
                (_a = _this.player) === null || _a === void 0 ? void 0 : _a.update();
                _this.updateFood();
                _this.checkCollisions();
                _this.removeOldFood();
            }
        });
    };
    Game.prototype.checkCollisions = function () {
        if (this.player) {
            for (var _i = 0, _a = this.foodItems; _i < _a.length; _i++) {
                var foodItem = _a[_i];
                if (foodItem.position().x >= this.player.position().x - config.playerWidth / 2 &&
                    foodItem.position().x <= this.player.position().x + config.playerWidth / 2 &&
                    foodItem.position().y >= this.player.position().y - config.playerWidth &&
                    foodItem.position().y <= this.player.position().y) {
                    foodItem.markedToRemove = true;
                    this.ui.addScore(1);
                }
            }
        }
    };
    Game.prototype.updateFood = function () {
        for (var _i = 0, _a = this.foodItems; _i < _a.length; _i++) {
            var foodItem = _a[_i];
            foodItem.update();
        }
    };
    Game.prototype.increaseFailCounter = function () {
        this.failCounter++;
        if (this.failCounter >= config.failCountMax) {
            this.changeState(GameState.FAILED);
        }
    };
    Game.prototype.generateFood = function () {
        var foodSpeed = config.foodInitialSpeed + (config.foodSpeedIncrease * this.level);
        var foodItemIndex = random_1.random(0, config.foodTypes.length);
        var sprite = PIXI.Sprite.from(config.foodTypes[foodItemIndex] + ".png");
        var foodItem = new FoodItem_1.FoodItem(sprite, foodSpeed, this.windowSize, config.foodMargin, this.increaseFailCounter.bind(this));
        this.foodItems.push(foodItem);
        this.app.stage.addChild(foodItem.sprite);
    };
    Game.prototype.removeOldFood = function () {
        var foodItemsToRemove = this.foodItems.filter(function (item) { return item.markedToRemove === true; });
        var foodSpritesToRemove = foodItemsToRemove.map(function (item) { return item.sprite; });
        for (var _i = 0, foodSpritesToRemove_1 = foodSpritesToRemove; _i < foodSpritesToRemove_1.length; _i++) {
            var foodSprite = foodSpritesToRemove_1[_i];
            this.app.stage.removeChild(foodSprite);
        }
        this.foodItems = this.foodItems.filter(function (item) { return !item.markedToRemove; });
    };
    Game.prototype.setupKeyboardControl = function () {
        var _this = this;
        this.arrowLeftHandler = keyHandler_1.keyHandler('ArrowLeft', function () { var _a; return (_a = _this.player) === null || _a === void 0 ? void 0 : _a.moveStateChanged(Player_1.MoveState.LEFT); }, function () { var _a; return (_a = _this.player) === null || _a === void 0 ? void 0 : _a.moveStateChanged(Player_1.MoveState.IDLE); });
        this.arrowRightHandler = keyHandler_1.keyHandler('ArrowRight', function () { var _a; return (_a = _this.player) === null || _a === void 0 ? void 0 : _a.moveStateChanged(Player_1.MoveState.RIGHT); }, function () { var _a; return (_a = _this.player) === null || _a === void 0 ? void 0 : _a.moveStateChanged(Player_1.MoveState.IDLE); });
    };
    Game.prototype.newLevel = function () {
        this.level += 1;
    };
    return Game;
}());
exports.Game = Game;
window.onload = function () {
    new Game();
};
window.PIXI = PIXI;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.keyHandler = void 0;
var KeyState;
(function (KeyState) {
    KeyState[KeyState["UP"] = 0] = "UP";
    KeyState[KeyState["DOWN"] = 1] = "DOWN";
})(KeyState || (KeyState = {}));
exports.keyHandler = function (keyCode, pressCallback, releaseCallback) {
    var key = {
        keyCode: keyCode,
        state: KeyState.UP,
        pressCallback: pressCallback,
        releaseCallback: releaseCallback,
        downHandler: undefined,
        upHandler: undefined,
        unsubscribe: undefined,
    };
    key.downHandler = function (event) {
        if (event.key === key.keyCode) {
            if (key.state === KeyState.UP && key.pressCallback) {
                key.pressCallback();
            }
            key.state = KeyState.DOWN;
            event.preventDefault();
        }
    };
    key.upHandler = function (event) {
        if (event.key === key.keyCode) {
            if (key.state === KeyState.DOWN && key.releaseCallback) {
                key.releaseCallback();
            }
            key.state = KeyState.UP;
            event.preventDefault();
        }
    };
    var downListener = key.downHandler.bind(key);
    var upListener = key.upHandler.bind(key);
    window.addEventListener("keydown", downListener, false);
    window.addEventListener("keyup", upListener, false);
    key.unsubscribe = function () {
        window.removeEventListener("keydown", downListener);
        window.removeEventListener("keyup", upListener);
    };
    return key;
};


/***/ }),
/* 5 */
/***/ (function(module) {

module.exports = JSON.parse("{\"windowSize\":{\"width\":600,\"height\":700},\"failCountMax\":10,\"levelChangeTime\":15000,\"playerSpeed\":6,\"playerMargin\":30,\"playerPositionY\":640,\"playerAnimationSpeed\":0.1,\"playerWidth\":84,\"foodGenerationInterval\":1000,\"foodInitialSpeed\":2,\"foodSpeedIncrease\":1,\"foodMargin\":20,\"foodTypes\":[\"Apple\",\"AppleWorm\",\"Avocado\",\"Bacon\",\"Beer\",\"Boar\",\"Bread\",\"Brownie\",\"Bug\",\"Cheese\",\"Cherry\",\"Chicken\",\"ChickenLeg\",\"Cookie\",\"DragonFruit\",\"Eggplant\",\"Eggs\",\"Fish\",\"FishFillet\",\"FishSteak\",\"Grub\",\"Grubs\",\"Honey\",\"Honeycomb\",\"Jam\",\"Jerky\",\"Lemon\",\"Marmalade\",\"MelonCantaloupe\",\"MelonHoneydew\",\"MelonWater\",\"Moonshine\",\"Olive\",\"Onion\",\"Peach\",\"PepperGreen\",\"Pepperoni\",\"PepperRed\",\"Pickle\",\"PickledEggs\",\"PieApple\",\"PieLemon\",\"PiePumpkin\",\"Pineapple\",\"Potato\",\"PotatoRed\",\"Pretzel\",\"Ribs\",\"Roll\",\"Saki\",\"Sardines\",\"Sashimi\",\"Sausages\",\"Shrimp\",\"Steak\",\"Stein\",\"Strawberry\",\"Sushi\",\"Tart\",\"Tomato\",\"Turnip\",\"Waffles\",\"Whiskey\",\"Wine\"]}");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodItem = void 0;
var random_1 = __webpack_require__(1);
var FoodItem = /** @class */ (function () {
    function FoodItem(sprite, speed, windowSize, margin, foodMissedHandler) {
        this.speed = 0;
        this.markedToRemove = false;
        this.sprite = sprite;
        this.speed = speed;
        this.windowSize = windowSize;
        this.sprite.position.x = random_1.random(margin, this.windowSize.width - margin);
        this.sprite.position.y = 0;
        this.foodMissedHandler = foodMissedHandler;
    }
    FoodItem.prototype.update = function () {
        this.sprite.position.y += this.speed;
        if (this.sprite.position.y > this.windowSize.height) {
            this.markedToRemove = true;
            this.foodMissedHandler();
        }
    };
    FoodItem.prototype.position = function () {
        return this.sprite.position;
    };
    return FoodItem;
}());
exports.FoodItem = FoodItem;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = exports.MoveState = void 0;
var PIXI = __importStar(__webpack_require__(0));
var MoveState;
(function (MoveState) {
    MoveState[MoveState["LEFT"] = 0] = "LEFT";
    MoveState[MoveState["RIGHT"] = 1] = "RIGHT";
    MoveState[MoveState["IDLE"] = 2] = "IDLE";
})(MoveState = exports.MoveState || (exports.MoveState = {}));
var Player = /** @class */ (function () {
    function Player(textures, speed, animationSpeed, positionY, windowSize, margin) {
        this.speed = 0;
        this.moveState = MoveState.IDLE;
        this.markedToRemove = false;
        var idleFrames = textures[MoveState.IDLE];
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
    Player.prototype.update = function () {
        if (this.moveState !== MoveState.IDLE) {
            this.sprite.position.x += this.moveState === MoveState.LEFT ? -this.speed : this.speed;
            if (this.sprite.position.x > this.windowSize.width - this.margin) {
                this.sprite.position.x = this.windowSize.width - this.margin;
            }
            else if (this.sprite.position.x < this.margin) {
                this.sprite.position.x = this.margin;
            }
        }
        var newTextures = this.textures[this.moveState];
        if (this.sprite.textures !== newTextures) {
            this.sprite.textures = newTextures;
            this.sprite.play();
        }
    };
    Player.prototype.position = function () {
        return this.sprite.position;
    };
    Player.prototype.moveStateChanged = function (newState) {
        this.moveState = newState;
    };
    Player.prototype.reset = function () {
        this.moveStateChanged(MoveState.IDLE);
        this.sprite.x = this.windowSize.width / 2;
        this.sprite.y = this.initialPositionY;
    };
    return Player;
}());
exports.Player = Player;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI = void 0;
var PIXI = __importStar(__webpack_require__(0));
var style = new PIXI.TextStyle({
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
var buttonStyle = new PIXI.TextStyle({
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
var UI = /** @class */ (function () {
    function UI(windowSize) {
        this.score = 0;
        this.scoreText = new PIXI.Text("Score: " + this.score, style);
        this.gameOverHeading = new PIXI.Text('Game over!', style);
        this.gameOverText = new PIXI.Text("Your score: " + this.score, style);
        this.startAgainText = new PIXI.Text('Start again', buttonStyle);
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
    UI.prototype.addScore = function (points) {
        this.setScore(this.score += points);
    };
    UI.prototype.setScore = function (points) {
        this.score = points;
        this.scoreText.text = "Score: " + this.score;
        this.gameOverText.text = "Your score: " + this.score;
    };
    UI.prototype.registerStartAgainOnClick = function (onClick) {
        this.startAgainText.on('click', onClick);
    };
    return UI;
}());
exports.UI = UI;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Background = exports.BackgroundType = void 0;
var BackgroundType;
(function (BackgroundType) {
    BackgroundType[BackgroundType["MENU"] = 0] = "MENU";
    BackgroundType[BackgroundType["GAME"] = 1] = "GAME";
})(BackgroundType = exports.BackgroundType || (exports.BackgroundType = {}));
var Background = /** @class */ (function () {
    function Background(textures, windowSize) {
        this.type = BackgroundType.MENU;
        this.sprite = new PIXI.Sprite(textures[this.type]);
        this.textures = textures;
        this.windowSize = windowSize;
        this.sprite.x = this.windowSize.width / 2;
        this.sprite.y = this.windowSize.height / 2;
        this.sprite.anchor.set(0.5);
    }
    Background.prototype.typeChanged = function (type) {
        this.type = type;
        this.sprite.texture = this.textures[type];
    };
    return Background;
}());
exports.Background = Background;


/***/ })
/******/ ]);
});