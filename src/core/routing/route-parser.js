// TODO: Протестировать.
export class RouteParser {
    // Методы класса.
    parse(uri){
        let temp = uri.split(' ');

        temp = temp.filter(item => item !== '');

        return temp;
    } // parse.

    getValuesFromPattern(requestUri, definedUri, pattern){
        let requestUriSegments = this.parse(requestUri);
        let definedUriSegments = this.parse(definedUri);

        let values = [];

        let countSegments = requestUriSegments.length;

        for (let i = 0; i < countSegments; i++){
            let currentRequestUriSegment = requestUriSegments[i];
            let currentDefinedUriSegment = definedUriSegments[i];

            // TODO: Протестировать метод exp.test().
            if(pattern.test(currentDefinedUriSegment)){
                values.push(currentRequestUriSegment);
            }
        } // for.

        return values;
    } // getValuesFromPattern.
} // RouteParser.