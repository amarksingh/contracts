/**
 * Interface defining Cache Repository Contract.
 */
interface ICacheRepository {
    has(key: string): Promise<boolean>;
    get<T = unknown>(key: string, defaultValue?: T | null): Promise<T | null>;
    put<T = unknown>(key: string, value: T, seconds?: number): Promise<boolean>;
    pull<T = unknown>(key: string, defaultValue?: T | null): Promise<T | null>;
    many<T = unknown>(keys: string[]): Promise<Record<string, T | null>>;
    putMany(object: Record<string, unknown>, seconds?: number): Promise<Record<string, boolean>>;
    increment(key: string, value?: number): Promise<number | false>;
    decrement(key: string, value?: number): Promise<number | false>;
    forever<T = unknown>(key: string, value: T): Promise<boolean>;
    remember<T = unknown>(key: string, seconds: number, cb: Function): Promise<T>;
    rememberForever<T = unknown>(key: string, cb: Function): Promise<T>;
    forget(key: string): Promise<boolean>;
    flush(): Promise<boolean>;
}

/**
 * Class Repository Contract.
 */
class Repository implements ICacheRepository {
    async has(key: string): Promise<boolean> {
        return false;
    }

    async get<T = unknown>(key: string, defaultValue?: T | null): Promise<T | null> {
        return null;
    }

    async put<T = unknown>(key: string, value: T, seconds: number = 0): Promise<boolean> {
        return false;
    }

    async pull<T = unknown>(key: string, defaultValue?: T | null): Promise<T | null> {
        return null;
    }

    async many<T = unknown>(keys: string[]): Promise<Record<string, T | null>> {
        return {};
    }

    async putMany(object: Record<string, unknown> = {}, seconds: number = 0): Promise<Record<string, boolean>> {
        return {};
    }

    async increment(key: string, value: number = 1): Promise<number | false> {
        return false;
    }

    async decrement(key: string, value: number = 1): Promise<number | false> {
        return false;
    }

    async forever<T = unknown>(key: string, value: T): Promise<boolean> {
        return false;
    }

    async remember<T = unknown>(key: string, seconds: number = 0, cb: Function): Promise<T> {
        return (null as unknown) as T;
    }

    async rememberForever<T = unknown>(key: string, cb: Function): Promise<T> {
        return (null as unknown) as T;
    }

    async forget(key: string): Promise<boolean> {
        return false;
    }

    async flush(): Promise<boolean> {
        return false;
    }
}

export type { ICacheRepository };
module.exports = Repository;