export class Warsaw {

    message: string;

    constructor(message: string) {
        this.message = message;
    }

    printMessage(): string {
        return 'Hello from Warsaw : ' + this.message;
    }
}
