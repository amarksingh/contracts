/**
 * Interface defining Authenticatable User Contract.
 */
interface IAuthenticatable {
    getAuthIdentifierName(): string;
    getAuthIdentifier(): any;
    getAuthIdentifierForBroadcasting(): any;
    getAuthPassword(): string | null;
    getRememberToken(): string | null;
    setRememberToken(value: string | null): void;
    getRememberTokenName(): string;
}

/**
 * Class Authenticatable.
 */
class Authenticatable implements IAuthenticatable {
    getAuthIdentifierName(): string {
        return 'id';
    }

    getAuthIdentifier(): any {
        return null;
    }

    getAuthIdentifierForBroadcasting(): any {
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

export type { IAuthenticatable };
module.exports = Authenticatable;