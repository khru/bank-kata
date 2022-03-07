
/// // When
/// account.deposit(1000)
/// account.deposit(2000)
/// account.withdraw(500)
/// 
/// Then
/// assert(account.printStatement()).toBe(
/// Date       || Amount || Balance
/// 14/01/2012 || -500   || 2500
/// 13/01/2012 || 2000   || 3000
/// 10/01/2012 || 1000   || 1000
/// )

describe('statements printing', () => {
    it('displays statements', () => {
        const displayer = jest.fn();
        const account = new Account(
            displayer
        )

        account.deposit(1000)
        account.deposit(2000)
        account.deposit(500)

        account.printStatement();

        expect(consoleOutput).toContain(bla     blab blma);
    });
});
