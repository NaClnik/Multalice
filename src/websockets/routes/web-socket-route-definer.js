import {RouteDefiner} from "@/core/base/route-definer";
import {TestController} from "@/websockets/controllers/test-controller";

export class WebSocketRouteDefiner extends RouteDefiner{
    // Методы класса.
    getRoutes(){
        this._routesCollection.define('test/index/{id}', TestController, 'index');

        return this._routesCollection;
    } // getRoutes.
} // WebSocketRouteDefiner.