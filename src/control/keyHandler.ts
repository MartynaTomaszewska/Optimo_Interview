enum KeyState {
    UP,
    DOWN,
}

export interface KeyData {
    keyCode: string,
    state: KeyState,
    pressCallback: Function | undefined,
    releaseCallback: Function | undefined,
    downHandler: Function | undefined,
    upHandler: Function | undefined,
    unsubscribe: Function | undefined,
}

export const keyHandler = (keyCode: string, pressCallback: Function, releaseCallback: Function) => {
    const key: KeyData = {
        keyCode,
        state: KeyState.UP,
        pressCallback,
        releaseCallback,
        downHandler: undefined,
        upHandler: undefined,
        unsubscribe: undefined,
    };

    key.downHandler = (event: KeyboardEvent) => {
        if (event.key === key.keyCode) {
            if (key.state === KeyState.UP && key.pressCallback) {
                key.pressCallback();
            }
            key.state = KeyState.DOWN;
            event.preventDefault();
        }
    };

    key.upHandler = (event: KeyboardEvent) => {
        if (event.key === key.keyCode) {
            if (key.state === KeyState.DOWN && key.releaseCallback) {
                key.releaseCallback();
            }
            key.state = KeyState.UP;
            event.preventDefault();
        }
    };

    const downListener = key.downHandler.bind(key);
    const upListener = key.upHandler.bind(key);

    window.addEventListener(
        "keydown", downListener, false
    );
    window.addEventListener(
        "keyup", upListener, false
    );

    key.unsubscribe = () => {
        window.removeEventListener("keydown", downListener);
        window.removeEventListener("keyup", upListener);
    };

    return key;
}