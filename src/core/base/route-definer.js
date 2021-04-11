import {RoutesCollection} from "@/core/routing/routes-collection";

export class RouteDefiner {
    // Имитация абстрактного класса.
    // Конструктор.
    constructor() {
        if (new.target === RouteDefiner) {
            throw new TypeError("Cannot construct Abstract instances directly");
        } // if.

        this._routesCollection = new RoutesCollection();
    } // constructor.


} // RouteDefiner.