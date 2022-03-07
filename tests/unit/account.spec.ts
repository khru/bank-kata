import Account from "../../src/account";

describe('Account', () => {
    it('prints only the header when no operation were made', () => {
        const console = jest.fn()
        const transactionRepository = jest.fn();
        const account = new Account(console, transactionRepository)

        account.printStatement()
        expect(console).toHaveBeenCalledWith("Date || Amount || Balance");
    });


    it('print a deposit statement of 1000', () => {
        const console = jest.fn();
        const transactionRepository = jest.fn();
        const account = new Account(console, transactionRepository)

        account.deposit(1000);
        account.printStatement()

        expect(console).toHaveBeenCalledWith("Date || Amount || Balance");
        expect(transactionRepository).toHaveBeenCalledWith(500);

    });
});
