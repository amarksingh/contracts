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
class HttpRequest {
}

export type { IHttpRequest };
module.exports = HttpRequest;