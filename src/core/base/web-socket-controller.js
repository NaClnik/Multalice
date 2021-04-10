export class WebSocketController {
    // Поля класса.
    _webSocketDataBundle;

    // Имитация абстрактного класса.
    // Конструктор.
    constructor() {
        if (new.target === WebSocketController) {
            throw new TypeError("Cannot construct Abstract instances directly");
        } // if.
    } // constructor.

    //region Геттеры и сеттеры класса
    get webSocketDataBundle() {
        return this._webSocketDataBundle;
    }

    set webSocketDataBundle(value) {
        this._webSocketDataBundle = value;
    }
    //endregion
} // WebSocketController.