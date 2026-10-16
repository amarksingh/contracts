/**
 * Interface defining HttpResponse Contract.
 */
interface IHttpResponse {
    status(code: number): this;
    header(key: string, value: any): this;
    json(data: any): this;
    send(data: any): this;
    cookie(name: string, value: any, options?: Record<string, any>): this;
    clearCookie(name: string, options?: Record<string, any>): this;
    redirect(url: string, status?: number): any;
}

/**
  * Class HttpResponse.
  */
class HttpResponse implements IHttpResponse {
    status(code: number): this {
        return this;
    }

    header(key: string, value: any): this {
        return this;
    }

    json(data: any): this {
        return this;
    }

    send(data: any): this {
        return this;
    }

    cookie(name: string, value: any, options: Record<string, any> = {}): this {
        return this;
    }

    clearCookie(name: string, options: Record<string, any> = {}): this {
        return this;
    }

    redirect(url: string, status: number = 302): any {
        return null;
    }
}

export type { IHttpResponse };
export default HttpResponse;