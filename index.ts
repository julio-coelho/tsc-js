export class HelloTsc {

    message: string;

    constructor(message: string) {
        this.message = message;
    }

    printMessage(): void {
        console.log(this.message);
    }
}