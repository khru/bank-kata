import Account from "../../src/account";

describe('Account', () => {
    it('prints only the header when no operation were made', () => {
        const console = jest.fn()
        const account = new Account(console)

        account.printStatement()
        expect(console).toHaveBeenCalledWith("Date || Amount || Balance");
    });
});
