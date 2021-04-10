import {RouteParser} from "@/core/routing/route-parser";

export class DefaultUriMatchValidator {
    // Методы класса.

    // TODO: Подумать над декомпозицией этого метода.
    match(requestRoute, definedRoute){
        // Создаём экземпляр парсера.
        let routeParser = new RouteParser();

        // Достаём строку из роута.
        let requestRouteString = requestRoute.route;

        // Получаем позицию символа '?' для того, чтобы обрезать маршрут до строки запроса.
        let queryParamsPosition = requestRouteString.indexOf('?');

        // Если вхождение символа '?' найдено, то обрезаем маршрут до строки запроса.
        if(queryParamsPosition !== -1){
            requestRouteString = requestRouteString.substr(0, queryParamsPosition);
        } // if.

        // Парсим маршруты.
        let requestRouteSegments = routeParser.parse(requestRouteString);
        let definedRouteSegments = routeParser.parse(definedRoute.route);

        // Если количество сегментов не совпадает, то возвращаем false.
        if(requestRouteSegments.length !== definedRouteSegments.length){
            return false;
        } // if.

        // Флаг, совпадают ли маршруты.
        let isMatch = true;

        // Получаем общее количество сегментов.
        let totalCountSegments = requestRouteSegments.length;

        // В цикле сравниваем сегменты.
        for(let i = 0; i < totalCountSegments; i++){
            // Получение текущих сегментов и приведение
            // их к нижнему регистру для сравнивания.
            let currentRequestRouteSegment = requestRouteSegments[i].toLowerCase();
            let currentDefinedRouteSegment = definedRouteSegments[i].toLowerCase();

            // TODO: Протестировать регулярное выражение.
            if(!(currentRequestRouteSegment === currentDefinedRouteSegment
            || /{[^/]+}/.test(currentDefinedRouteSegment))){
                isMatch = false;
                break;
            } // if.
        } // for.

        return isMatch;
    } // match.
} // DefaultUriMatchValidator.