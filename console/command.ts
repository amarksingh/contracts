/**
 * Interface defining Console Command Contract.
 */
interface ICommand {
    getApp(): any;
    setApp(app: any): void;
    getConsole(): any;
    setConsole(console: any): void;
    execute(): Promise<any> | any;
}

/**
 * Class Command Contract.
 */
class Command implements ICommand {
    getApp(): any {
        return null;
    }

    setApp(app: any): void {
    }

    getConsole(): any {
        return null;
    }

    setConsole(console: any): void {
    }

    execute(): Promise<any> | any {
    }
}

export type { ICommand };
export default Command;