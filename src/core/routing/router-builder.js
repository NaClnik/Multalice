import {Router} from "@/core/routing/router";

export class RouterBuilder {
    // Поля класса.
    _router;

    // Конструктор.
    constructor() {
        this._router = new Router();
    } // constructor.

    // Методы класса.
    // TODO: Изменить setRoutesCollection на setRouteDefiner.
    setRoutesCollection(routeDefiner){
        this._router.routesCollection = routeDefiner.routes;
        return this;
    } // setRoutesCollection.

    setUriMatchValidator(uriMatchValidator){
        this._router.uriMatchValidator = uriMatchValidator;
        return this;
    } // setUriMatchValidator.

    setWebSocketDataBundle(webSocketDataBundle){
        this._router.webSocketDataBundle = webSocketDataBundle;
        return this;
    } // setWebSocketDataBundle.

    build(){
        return this._router;
    } // build.
} // RouterBuilder.