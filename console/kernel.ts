/**
 * Interface defining Console Kernel Contract.
 */
interface IKernel {
    handle(input?: any, output?: any): Promise<number>;
    callCommand(command: string, parameters?: any[], outputBuffer?: any): Promise<number>;
    queue(command: string, parameters?: any[]): Promise<any>;
    all(): Record<string, any>;
    output(): string;
    terminate(input?: any, status?: number): void;
}

/**
 * Class Kernel Contract.
 */
class Kernel implements IKernel {
    async handle(input?: any, output?: any): Promise<number> {
        return 0;
    }

    async callCommand(command: string, parameters: any[] = [], outputBuffer: any = null): Promise<number> {
        return 0;
    }

    async queue(command: string, parameters: any[] = []): Promise<any> {
    }

    all(): Record<string, any> {
        return {};
    }

    output(): string {
        return '';
    }

    terminate(input?: any, status?: number): void {
    }
}

export type { IKernel };
module.exports = Kernel;