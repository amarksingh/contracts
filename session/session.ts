/**
 * Interface defining Session Contract.
 */
interface ISession {
    getId(): string;
    flush(): boolean;
    save(callback: Function): void;
    pull<T = unknown>(key: string, defaultValue?: T | null): T | null;
    regenerateToken(): void;
    remove(key: string): void;
    push<T = unknown>(key: string, value: T): void;
    merge(key: string, value: any, defaultValue?: Record<string, any>): void;
    regenerate(destroy: boolean, cb?: Function): void;
    has(key: string): boolean;
    forget(key: string): void;
    get<T = unknown>(key: string, defaultValue?: T | null): T | null;
    all(): Record<string, any>;
    put<T = unknown>(key: string | Record<string, any>, value?: T): void;
    flash<T = unknown>(key: string | Record<string, any>, value?: T): void;
    flashOnly(keys: string[] | string): void;
    flashExcept(keys: string[] | string): void;
    reflash(): void;
    keep(keys: string[] | string): void;
    token(): string | null;
}

/**
 * Class Session Contract.
 */
class Session implements ISession {
    getId(): string {
        return '';
    }

    flush(): boolean {
        return true;
    }

    save(callback: Function): void {
    }

    pull<T = unknown>(key: string, defaultValue?: T | null): T | null {
        return null;
    }

    regenerateToken(): void {
    }

    remove(key: string): void {
    }

    push<T = unknown>(key: string, value: T): void {
    }

    merge(key: string, value: any, defaultValue: Record<string, any> = {}): void {
    }

    regenerate(destroy: boolean, cb?: Function): void {
    }

    has(key: string): boolean {
        return false;
    }

    forget(key: string): void {
    }

    get<T = unknown>(key: string, defaultValue?: T | null): T | null {
        return null;
    }

    all(): Record<string, any> {
        return {};
    }

    put<T = unknown>(key: string | Record<string, any>, value?: T): void {
    }

    flash<T = unknown>(key: string | Record<string, any>, value?: T): void {
    }

    flashOnly(keys: string[] | string): void {
    }

    flashExcept(keys: string[] | string): void {
    }

    reflash(): void {
    }

    keep(keys: string[] | string): void {
    }

    token(): string | null {
        return null;
    }
}

export type { ISession };
export default Session;