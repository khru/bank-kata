import Account from "../../src/account";

describe('Account', () => {
    it('prints only the header when no operation were made', () => {
        const messages = [];
        const console = (message) => {
            messages.push(message)
        }
        const account = new Account(console)

        account.printStatement()
        expect(messages).toBe([
            "Date || Amount || Balance"
        ])
    });
});
