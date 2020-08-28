# How to start
`npm install` - to install dependencies

`npm run start` - to start application

Now application is available in browser at http://127.0.0.1:8080/

# How to build
`npm run build` - to build application

# Config description
Config file called config.json is inside root directory.

**Note: After changing config file you must rebuild application!!!**

Available options in config file:
* windowSize: size of the game window (width and height in pixels)
* failCountMax: how many food items can user ignore before game over
* levelChangeTime: time after which level change (in ms)
* playerSpeed: player speed (pixels per 1 game frame)
* playerMargin: margins on each side of the window for blocking player (in pixels)
* playerPositionY: player Y position in the game
* playerAnimationSpeed: speed of player animation
* playerWidth: bounding box size of player
* foodGenerationInterval: how often food items are generated (in ms)
* foodInitialSpeed: initial speed of food items (pixels per 1 game frame)
* foodSpeedIncrease: food speed increase per level (pixels per 1 game frame)
* foodMargin: margins on each side of the window for blocking food (in pixels)
* foodTypes: list of available food types
