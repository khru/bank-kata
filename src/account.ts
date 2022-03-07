export default class Account {

    console: any;
    repository: any;

    constructor(console: any, repository: any) {
        this.console = console;
        this.repository = repository;
    }

    deposit(amount: number): void {
        throw new Error("Not implemented");
    }

    withdrawal(amount: number): void {
        throw new Error("Not implemented");
    }

    printStatement(): void {
        this.console("Date || Amount || Balance");
    }
}