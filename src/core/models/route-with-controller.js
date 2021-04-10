import {Route} from "@/core/models/route";

export class RouteWithController extends Route{
    // Поля класса.
    _controllerConstructor; // Конструктор контроллера.
    _actionName;            // Название экшена контроллера.

    // Конструктор.
    constructor(route, controllerConstructor, actionName) {
        super(route);
        this._controllerConstructor = controllerConstructor;
        this._actionName = actionName;
    } // constructor.

    //region Геттеры и сеттеры класса
    get controllerConstructor() {
        return this._controllerConstructor;
    }

    set controllerConstructor(value) {
        this._controllerConstructor = value;
    }

    get actionName() {
        return this._actionName;
    }

    set actionName(value) {
        this._actionName = value;
    }
    //endregion
} // RouteWithController.