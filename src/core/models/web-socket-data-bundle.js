export class WebSocketDataBundle {
    // Конструктор.
    constructor(socket, message) {
        this._socket = socket;
        this._message = message;
    } // constructor.

    //region Геттеры и сеттеры класса
    get socket() {
        return this._socket;
    }

    set socket(value) {
        this._socket = value;
    }

    get message() {
        return this._message;
    }

    set message(value) {
        this._message = value;
    }
    //endregion
} // WebSocketDataBundle.