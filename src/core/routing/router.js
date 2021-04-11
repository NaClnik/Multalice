import {RoutesCollection} from "@/core/routing/routes-collection";
import {DefaultUriMatchValidator} from "@/core/defaults/default-uri-match-validator";
import {Route} from "@/core/models/route";
import {RouteNotFoundError} from "@/core/errors/route-not-found-error";
import {ClassesWithDependenciesFactory} from "@/core/factories/classes-with-dependencies-factory";
import {RouteParser} from "@/core/routing/route-parser";

export class Router {
   // Конструктор.
    constructor() {
        this._routesCollection = new RoutesCollection();
        this._uriMatchValidator = new DefaultUriMatchValidator();
    } // constructor.

    //region Аксессоры и мутаторы класса
    get webSocketDataBundle() {
        return this._webSocketDataBundle;
    }

    set webSocketDataBundle(value) {
        this._webSocketDataBundle = value;
    }

    get routesCollection() {
        return this._routesCollection;
    }

    set routesCollection(value) {
        this._routesCollection = value;
    }

    get uriMatchValidator() {
        return this._uriMatchValidator;
    }

    set uriMatchValidator(value) {
        this._uriMatchValidator = value;
    }
    //endregion

    // Методы класса.
    // Метод для исполнения метода контроллера, к которому привязан маршрут.
    executeRoute(){
        // Получить совпадающий маршрут.
        let matchedRoute = this.getMatchedRoute();

        // Создать фабрику для того, чтобы создать
        // экземпляр класса со всеми зависимостями.
        let classesWithDependenciesFactory = new ClassesWithDependenciesFactory();

        // Создаём экземпляр контроллера.
        let controllerInstance = classesWithDependenciesFactory
            .getClassInstanceWithDependencies(matchedRoute.controllerConstructor);

        let routeParser = new RouteParser();

        let args = routeParser
            .getValuesFromPattern(this._webSocketDataBundle.message['route'], matchedRoute.route, /{[^/]+}/);

        controllerInstance.webSocketDataBundle = this._webSocketDataBundle;

        controllerInstance[matchedRoute.actionName](...args);
    } // executeRoute.


    // Метод для получения маршрута, который совпадает с
    // определённым маршрутом в WebSocketRouteDefiner.
    getMatchedRoute(){
        // Получить все роуты, определённые в WebSocketRouteDefiner.
        let routesCollection = this._routesCollection.routes;

        // Получить массив с совпадающими маршрутами.
        let data = routesCollection.filter(route => {
            return this._uriMatchValidator
                .match(new Route(this.webSocketDataBundle.message['route']), route);
        }) // filter.

        let foundRoute = data[0];

        if(!foundRoute){
            throw new RouteNotFoundError('');
        } // if.

        return foundRoute;
    } // getMatchedRoute.
} // Router.
