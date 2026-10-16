/**
 * Interface defining CanResetPassword Contract.
 */
interface ICanResetPassword {
    getEmailForPasswordReset(): string;
    sendPasswordResetNotification(token: string): Promise<void> | void;
}

/**
 * Class CanResetPassword.
 */
class CanResetPassword implements ICanResetPassword {
    getEmailForPasswordReset(): string {
        return '';
    }

    sendPasswordResetNotification(token: string): Promise<void> | void {
    }
}

export type { ICanResetPassword };
export default CanResetPassword;