export class ClassesWithDependenciesFactory{
    getClassInstanceWithDependencies(constructor){
        let instance = new constructor();

        if(typeof instance.getDefinedDependencies === 'undefined'){
            return instance;
        } // if.

        let dependencies = instance.getDefinedDependencies();

        dependencies.forEach(item => {
            instance[item.name] = this.getClassInstanceWithDependencies(item.class);
        }) // forEach.

        return instance;
    } // getClassInstanceWithDependencies.
} // ClassWithDependenciesFactory.