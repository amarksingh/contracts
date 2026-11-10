import type { IAuthenticatable } from './authenticatable';

/**
 * Interface defining UserProvider contract.
 */
interface IUserProvider {
    retrieveById(identifier: any): Promise<IAuthenticatable | null | any>;
    retrieveByToken(identifier: any, token: string): Promise<IAuthenticatable | null | any>;
    updateRememberToken(user: IAuthenticatable, token: string): Promise<void>;
    retrieveByCredentials(credentials: Record<string, any>): Promise<IAuthenticatable | null | any>;
    validateCredentials(user: IAuthenticatable, credentials: Record<string, any>): Promise<boolean>;
    rehashPasswordIfRequired?(user: IAuthenticatable, credentials: Record<string, any>, force?: boolean): Promise<void>;
    [key: string]: any;
}

export type { IUserProvider };
