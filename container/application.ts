/**
 * Interface defining Container Application Contract.
 */
interface IContainer {
    alias(alias?: Record<string, any>): void;
    wrap($callback: Function, $parameters?: any[]): Function | void;
    call($callback: any, $parameters?: any[]): any;
    factory($abstract: any): Function | void;
    makeWith<T = any>($abstract: any, ...$parameters: any[]): T;
    make<T = any>($abstract: any, ...$parameters: any[]): T;
    resolve<T = any>($abstract: any, $parameters?: any[]): T;
    loadPath(dir: any): any;
    isBuildable($concrete: any): boolean | void;
    build<T = any>($concrete: any, $parameters?: any[]): T;
    getBindings(): Record<string, any> | void;
    bind(key: string, callback: any, singleton?: boolean): any;
    singleton($abstract: any, $concrete?: any): any;
    getOrCreateSingleton($abstract: any, $concrete?: any): any;
    app<T = any>(key?: string): T;
    forgetInstance($abstract: any): void;
    instance($abstract: any, $instance: any): any;
}

/**
 * Class Application.
 */
class Application implements IContainer {

    /**
     * alias definition.
     * @param {Record<string, any>} alias
     * @returns {void}
     */
    alias(alias: Record<string, any> = {}): void {

    }

    /**
     * wrap definition.
     * @param {Function} $callback
     * @param {any[]} $parameters
     * @returns {Function}
     */
    wrap($callback: Function, $parameters: any[] = []): Function | void {

    }

    /**
     * call definition.
     * @param {*} $callback
     * @param {any[]} $parameters
     * @returns {*}
     */
    call($callback: any, $parameters: any[] = []): any {

    }

    /**
     * factory definition.
     * @param {*} $abstract
     * @returns {Function}
     */
    factory($abstract: any): Function | void {

    }

    /**
     * makeWith definition.
     * @param {*} $abstract
     * @param {any[]} $parameters
     * @returns {*}
     */
    makeWith($abstract: any, ...$parameters: any[]): any {

    }

    /**
     * make definition.
     * @param {*} $abstract
     * @param {any[]} $parameters
     * @returns {*}
     */
    make($abstract: any, ...$parameters: any[]): any {

    }

    /**
     * resolve definition.
     * @param {*} $abstract
     * @param {any[]} $parameters
     * @returns {*}
     */
    resolve($abstract: any, $parameters: any[] = []): any {

    }

    /**
     * loadPath definition.
     * @param {*} dir
     * @returns {*}
     */
    loadPath(dir: any): any {

    }

    /**
     * isBuildable definition.
     * @param {*} $concrete
     * @returns {boolean}
     */
    isBuildable($concrete: any): boolean | void {

    }

    /**
     * build definition.
     * @param {*} $concrete
     * @param {any[]} $parameters
     * @returns {*}
     */
    build($concrete: any, $parameters: any[] = []): any {

    }

    /**
     * getBindings definition.
     * @returns {Record<string, any>}
     */
    getBindings(): Record<string, any> | void {

    }

    /**
     * bind definition.
     * @param {string} key
     * @param {*} callback
     * @param {boolean} singleton
     * @returns {*}
     */
    bind(key: string, callback: any, singleton: boolean = false): any {

    }

    /**
     * singleton definition.
     * @param {*} $abstract
     * @param {*} $concrete
     * @returns {*}
     */
    singleton($abstract: any, $concrete: any): any {

    }

    /**
     * getOrCreateSingleton definition.
     * @param {*} $abstract
     * @param {*} $concrete
     * @returns {*}
     */
    getOrCreateSingleton($abstract: any, $concrete: any): any {

    }

    /**
     * app definition.
     * @param {string} key
     * @returns {*}
     */
    app(key?: string): any {

    }

    /**
     * forgetInstance definition.
     * @param {*} $abstract
     * @returns {void}
     */
    forgetInstance($abstract: any): void {

    }

    /**
     * instance definition.
     * @param {*} $abstract
     * @param {*} $instance
     * @returns {*}
     */
    instance($abstract: any, $instance: any): any {

    }

}

export type { IContainer };
export default Application;