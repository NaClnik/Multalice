export class Route {
    // Поля класса.
    _route;

    // Конструктор.
    constructor(route) {
        this._route = route;
    } // constructor.

    //region Геттеры и сеттеры класса
    get route() {
        return this._route;
    } // get.

    set route(value) {
        this._route = value;
    } // set.
    //endregion
} // Route.