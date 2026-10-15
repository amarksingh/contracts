/**
 * Interface defining Generic User Contract.
 */
interface IGenericUser {
    getAuthIdentifierName(): string;
    getAuthIdentifier(): any;
    getAuthPassword(): string | null;
    getRememberToken(): string | null;
    setRememberToken(value: string | null): void;
    getRememberTokenName(): string;
}

/**
 * Class GenericUserInterface.
 */
class GenericUserInterface implements IGenericUser {
    getAuthIdentifierName(): string {
        return 'id';
    }

    getAuthIdentifier(): any {
        return null;
    }

    getAuthPassword(): string | null {
        return null;
    }

    getRememberToken(): string | null {
        return null;
    }

    setRememberToken(value: string | null): void {
    }

    getRememberTokenName(): string {
        return 'remember_token';
    }
}

export type { IGenericUser };
module.exports = GenericUserInterface;