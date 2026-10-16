/**
 * Interface defining Encrypter Contract.
 */
interface IEncrypter {
    encrypt(value: any, serialize?: boolean): string;
    encryptString(value: string): string;
    decrypt<T = any>(payload: any, unserialize?: boolean): T;
    decryptString(payload: any): string;
    getKey(): string;
}

/**
 * Class EncrypterContract.
 */
class EncrypterContract implements IEncrypter {
    encrypt(value: any, serialize: boolean = true): string {
        return '';
    }

    encryptString(value: string): string {
        return '';
    }

    decrypt<T = any>(payload: any, unserialize: boolean = true): T {
        return (null as unknown) as T;
    }

    decryptString(payload: any): string {
        return '';
    }

    getKey(): string {
        return '';
    }
}

export type { IEncrypter };
export default EncrypterContract;