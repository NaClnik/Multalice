import {RouterBuilder} from "@/core/routing/router-builder";
import {WebSocketRouteDefiner} from "@/websockets/routes/web-socket-route-definer";
import {DefaultUriMatchValidator} from "@/core/defaults/default-uri-match-validator";

export class WebSocketControllerLoader {
    // Поля класса.
    _webSocketDataBundle;

    // Конструктор.
    constructor(webSocketDataBundle) {
        this._webSocketDataBundle = webSocketDataBundle;
    } // constructor.

    //region Геттеры и сеттеры класса
    get webSocketDataBundle() {
        return this._webSocketDataBundle;
    }

    set webSocketDataBundle(value) {
        this._webSocketDataBundle = value;
    }
    //endregion

    // Методы класса.
    run(){
        let router = new RouterBuilder()
            .setRoutesCollection(new WebSocketRouteDefiner())
            .setUriMatchValidator(new DefaultUriMatchValidator())
            .setWebSocketDataBundle(this._webSocketDataBundle)
            .build();

        router.executeRoute();
    } // run.
} // WebSocketControllerLoader.