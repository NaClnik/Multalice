import {RouteWithController} from "@/core/models/route-with-controller";

export class RoutesCollection
{
    // Поля класса.
    _routes;

    // Конструктор.
    constructor() {
        this._routes = [];
    } // constructor.

    // Геттеры класса.
    get routes(){
        return this._routes;
    } // get.

    // Методы класса.
    define(route, controllerConstructor, actionName){
        this._routes.push(new RouteWithController(route, controllerConstructor, actionName));
    } // define.
} // RoutesCollection.