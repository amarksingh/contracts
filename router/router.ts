/**
 * Interface defining Router Contract.
 */
interface IRouter {
    get(uri: string, action?: any): any;
    post(uri: string, action?: any): any;
    put(uri: string, action?: any): any;
    patch(uri: string, action?: any): any;
    delete(uri: string, action?: any): any;
    options(uri: string, action?: any): any;
    any(uri: string, action?: any): any;
    match(methods: string[], uri: string, action?: any): any;
    prefix(prefix: string): this;
    middleware(...middlewares: any[]): this;
    dispatch(request: any, response: any): Promise<any>;
}

/**
 * Class Router Contract.
 */
class Router {
}

export type { IRouter };
export default Router;