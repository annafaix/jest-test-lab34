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

describe('withdraw function', ()=>{

  test('amount and account are valid values', ()=>{
    let kalle = { name: 'Kalle', balance: 150 };
    withdraw(kalle, 100);
    expect(kalle.balance).toBe(50)
  })
  test('amount is negative number', ()=>{
    let kalle = { name: 'Kalle', balance: 150 };
    expect(()=> withdraw(kalle, -500)).toThrow();
  })

  test('amount is string "200"', ()=>{
    let kalle = { name: 'Kalle', balance: 1500 };
    withdraw(kalle, "200");
    expect(kalle.balance).toBe(1300);
  })
  test('amount is string "hello"', ()=>{
    let greta = { name: 'Greta', balance: 1200 };
    expect(()=> withdraw(greta, "hello")).toThrow();
  })
  test('amount is not valid parameter', ()=>{
    let greta = { name: 'Greta', balance: 1200 };
    expect(()=> withdraw(greta, null)).toThrow();
  })
  test('amount is positive Infinity', ()=>{
    let kalle = { name: 'Kalle', balance: 1500 };
    expect(()=> withdraw(kalle, Infinity)).toThrow();
  })
  test('account is not valid value - Number', ()=>{
    let kalle = { name: 'Kalle', balance: 1500 };
    expect(()=> withdraw(1234, 100)).toThrow();
  })
	test('account is not valid value - String', ()=>{
    let kalle = { name: 'Kalle', balance: 1500 };
    expect(()=> withdraw('kalle', 100)).toThrow();
	})
	test('account is not valid value - Array', ()=>{
    let kalle = { name: 'Kalle', balance: 1500 };
    expect(()=> withdraw([], 100)).toThrow();
	})
})



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
	 	//test for transfer greta->kalle
		// test('transfer test from greta to kalle', ()=>{
		// 	transfer(state.greta, state.kalle, 100)
		// 	expect(state.kalle.balance).toBe(100);
		// })
});
