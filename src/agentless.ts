export class Agentless {

    message: string;

    constructor(message: string) {
        this.message = message;
    }

    printMessage(): string {
        return 'Hello from Agentless : ' + this.message;
    }
}
