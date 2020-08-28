import { Size } from "../helpers/size";

export enum BackgroundType {
    MENU,
    GAME,
}

export interface BackgroundTextures {
    [BackgroundType.MENU]: PIXI.Texture,
    [BackgroundType.GAME]: PIXI.Texture,
}

export class Background {
    private windowSize: Size;
    private type: BackgroundType = BackgroundType.MENU;
    private textures: BackgroundTextures;

    public sprite: PIXI.Sprite;

    public constructor(textures: BackgroundTextures, windowSize: Size) {
        this.sprite = new PIXI.Sprite(textures[this.type]);
        this.textures = textures;
        this.windowSize = windowSize;

        this.sprite.x = this.windowSize.width / 2;
        this.sprite.y = this.windowSize.height / 2;
        this.sprite.anchor.set(0.5);
    }

    public typeChanged(type: BackgroundType): void {
        this.type = type;
        this.sprite.texture = this.textures[type];
    }
}