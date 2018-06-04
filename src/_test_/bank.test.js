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