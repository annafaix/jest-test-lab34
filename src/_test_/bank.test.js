import {state, deposit, withdraw, transfer} from '../bank.js'


describe('test deposit', () => {
	// Test cases
	test('correct state for deposit on kalle with number', () => {
        let currentBalance = state.kalle.balance;
        deposit(state.kalle, 100);
        expect(state.kalle.balance).toBe(currentBalance + 100);
    });
    test('correct state for deposit on kalle with string', () => {
        let currentBalance = state.kalle.balance;
        deposit(state.kalle, '100');
        expect(state.kalle.balance).toBe(currentBalance + 100);
    });
    test('correct state for deposit on kalle with non-valid string', () => {
        expect(() => deposit(state.kalle, 'hello')).toThrow()
    });
    test('correct state for deposit on kalle with undefined', () => {
        expect(() => deposit(state.kalle, undefined)).toThrow()
    });
    test('correct state for deposit on kalle with null', () => {
        expect(() => deposit(state.kalle, null)).toThrow()
    });
    test('correct state for deposit on kalle with infinity ', () => {
        expect(() => deposit(state.kalle, Infinity)).toThrow()
    });
});


/*
function transfer(accountSender, accountReceiver, amount) {
	if( (typeof accountReceiver.balance) !== 'number'
 			|| accountReceiver.balance)
	throw new Error('');
accountSender.balance -= amount;
}
*/

describe('test transfer', () => {
	// Test cases
	test('correct state for transfer from kalle to greta -> 100 with valid number', () => {
        let currentBalanceSender = state.kalle.balance;
        let currentBalanceReceiver = state.greta.balance;
        transfer(state.kalle, state.greta, 100);
        expect(state.kalle.balance).toBe(currentBalanceSender - 100);
        expect(state.greta.balance).toBe(currentBalanceReceiver + 100);
    });
    test('correct state for transfer from kalle to greta -> 100 with valid number string', () => {
        let currentBalanceSender = state.kalle.balance;
        let currentBalanceReceiver = state.greta.balance;
        transfer(state.kalle, state.greta, '100');
        expect(state.kalle.balance).toBe(currentBalanceSender - 100);
        expect(state.greta.balance).toBe(currentBalanceReceiver + 100);
    });
    test('correct state for transfer from kalle to greta -> 100 with valid number when greta doesn`t have enough money cause she`s poor as fuck', () => {
        let currentBalanceSender = state.kalle.balance;
        let currentBalanceReceiver = state.greta.balance;
        expect(() => transfer(state.kalle, state.greta, 10000)).toThrow()
    });
    test('correct state for transfer from kalle to greta -> 100 with valid number in string when greta doesn`t have enough money cause she`s poor as fuck', () => {
        let currentBalanceSender = state.kalle.balance;
        let currentBalanceReceiver = state.greta.balance;
        expect(() => transfer(state.kalle, state.greta, '10000')).toThrow()
    });
    test('correct state for transfer from kalle to greta -> -100 kalle is a greedy fucker and wants to steal money from his friend greta, No No No', () => {
        let currentBalanceSender = state.kalle.balance;
        let currentBalanceReceiver = state.greta.balance;
        expect(() => transfer(state.kalle, state.greta, -100)).toThrow()
    });
});