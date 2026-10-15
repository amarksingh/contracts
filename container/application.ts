
/**
 * Class Application.
 */
class Application{

    /**
     * alias definition.
     * @param {*} alias
     * @returns {any}
     */
    alias(alias = {}) {

    }

    wrap($callback,  $parameters = [])
    {

    }

    call($callback,  $parameters = [])
    {

    }

    factory($abstract)
    {

    }

    makeWith($abstract, $parameters = [])
    {

    }

    make($abstract, $parameters = [])
    {

    }

    resolve($abstract)
    {

    }

    /**
     * loadPath definition.
     * @param {*} dir
     * @returns {any}
     */
    loadPath(dir){

    }

    isBuildable($concrete)
    {

    }

    build($concrete,$parameters=[])
    {

    }

    getBindings()
    {

    }

    /**
     * bind definition.
     * @param {*} key
     * @param {*} callback
     * @param {*} singleton
     * @returns {any}
     */
    bind(key, callback,singleton=false) {

    }

    /**
     * singleton definition.
     * @param {*} $abstract
     * @param {*} $concrete
     * @returns {any}
     */
    singleton($abstract, $concrete) {

    }

    /**
     * getOrCreateSingleton definition.
     * @param {*} $abstract
     * @param {*} $concrete
     * @returns {any}
     */
    getOrCreateSingleton($abstract, $concrete) {

    }

    /**
     * app definition.
     * @param {*} key
     * @returns {any}
     */
    app(key) {

    }

    forgetInstance($abstract)
    {

    }

    instance($abstract, $instance)
    {

    }

}

module.exports = Application