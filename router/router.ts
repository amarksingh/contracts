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
class Router implements IRouter {
    get(uri: string, action: any = null): any {
        return this;
    }

    post(uri: string, action: any = null): any {
        return this;
    }

    put(uri: string, action: any = null): any {
        return this;
    }

    patch(uri: string, action: any = null): any {
        return this;
    }

    delete(uri: string, action: any = null): any {
        return this;
    }

    options(uri: string, action: any = null): any {
        return this;
    }

    any(uri: string, action: any = null): any {
        return this;
    }

    match(methods: string[], uri: string, action: any = null): any {
        return this;
    }

    prefix(prefix: string): this {
        return this;
    }

    middleware(...middlewares: any[]): this {
        return this;
    }

    async dispatch(request: any, response: any): Promise<any> {
    }
}

export type { IRouter };
module.exports = Router;