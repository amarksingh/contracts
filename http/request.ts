/**
 * Interface defining HttpRequest Contract.
 */
interface IHttpRequest {
    path(): string;
    url(): string;
    fullUrl(): string;
    ip(): string;
    header(key: string, defaultValue?: any): any;
    input(key?: string, defaultValue?: any): any;
    all(): Record<string, any>;
    has(key: string | string[]): boolean;
    filled(key: string | string[]): boolean;
    cookie(key?: string, defaultValue?: any): any;
    file(key: string): any;
    session(): any;
    user(): any;
}

/**
 * Class HttpRequest.
 */
class HttpRequest implements IHttpRequest {
    method: string = 'GET';

    path(): string {
        return '/';
    }

    url(): string {
        return '';
    }

    fullUrl(): string {
        return '';
    }

    ip(): string {
        return '127.0.0.1';
    }

    header(key: string, defaultValue: any = null): any {
        return defaultValue;
    }

    input(key?: string, defaultValue: any = null): any {
        return defaultValue;
    }

    all(): Record<string, any> {
        return {};
    }

    has(key: string | string[]): boolean {
        return false;
    }

    filled(key: string | string[]): boolean {
        return false;
    }

    cookie(key?: string, defaultValue: any = null): any {
        return defaultValue;
    }

    file(key: string): any {
        return null;
    }

    session(): any {
        return null;
    }

    user(): any {
        return null;
    }
}

export type { IHttpRequest };
module.exports = HttpRequest;