import type { IApplication as IContainerApplication } from '../container/application';

/**
 * Interface defining Foundation Application contract.
 */
interface IApplication extends IContainerApplication {
    environment(...environments: string[]): string | boolean;
    isLocal(): boolean;
    isProduction(): boolean;
    runningInConsole(): boolean;
    boot(): void;
    booted(callback: Function): void;
    booting(callback: Function): void;
    basePath(path?: string): string;
    storagePath(path?: string): string;
    configPath(path?: string): string;
    databasePath(path?: string): string;
    resourcePath(path?: string): string;
    publicPath(path?: string): string;
    [key: string]: any;
}

/**
 * Class Foundation Application contract.
 */
class ApplicationContract {
    public environment(...environments: string[]): string | boolean {
        return false;
    }
    public isLocal(): boolean {
        return false;
    }
    public isProduction(): boolean {
        return false;
    }
    public runningInConsole(): boolean {
        return false;
    }
    public boot(): void {}
    public booted(callback: Function): void {}
    public booting(callback: Function): void {}
    public basePath(path: string = ''): string {
        return '';
    }
    public storagePath(path: string = ''): string {
        return '';
    }
    public configPath(path: string = ''): string {
        return '';
    }
    public databasePath(path: string = ''): string {
        return '';
    }
    public resourcePath(path: string = ''): string {
        return '';
    }
    public publicPath(path: string = ''): string {
        return '';
    }
}

export type { IApplication };
export default ApplicationContract;
