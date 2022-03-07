import Account from "../../src/account";

describe('statements printing', () => {
    it('displays statements', () => {
        const console = jest.fn();
        const account = new Account(
            console
        )

        account.deposit(1000)
        account.deposit(2000)
        account.withdrawal(500)

        account.printStatement();

        expect(console.mock.calls[0]).toHaveBeenCalledWith("Date || Amount || Balance");
        expect(console.mock.calls[1]).toHaveBeenCalledWith("14/01/2012 || -500 || 2500");
        expect(console.mock.calls[2]).toHaveBeenCalledWith("13/01/2012 || 2000   || 3000");
        expect(console.mock.calls[3]).toHaveBeenCalledWith("10/01/2012 || 1000   || 1000");
    });
});
