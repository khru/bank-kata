import Account from "../../src/account";
import TransactionRepository from "../../src/transaction-repository";
import { mock } from 'jest-mock-extended';

describe('Account', () => {
    it('prints only the header when no operation were made', () => {
        const console = jest.fn()
        const transactionRepository: TransactionRepository = mock<TransactionRepository>()
        const account = new Account(console, transactionRepository)

        account.printStatement()
        expect(console).toHaveBeenCalledWith("Date || Amount || Balance");
    });


    it('print a deposit statement of 1000', () => {
        const console = jest.fn();
        const transactionRepository = {
            add: jest.fn()
        };
        const account = new Account(console, transactionRepository)

        account.deposit(1000);
        account.printStatement()

        expect(transactionRepository.add).toHaveBeenCalledWith(1000);

    });
});
