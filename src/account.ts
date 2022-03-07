import TransactionRepository from "./transaction-repository";

export default class Account {

    console: any;
    repository: any;

    constructor(console: any, repository: TransactionRepository) {
        this.console = console;
        this.repository = repository;
    }

    deposit(amount: number): void {
        this.repository.add(amount)
    }

    withdrawal(amount: number): void {
        throw new Error("Not implemented");
    }

    printStatement(): void {
        this.console("Date || Amount || Balance");
    }
}
