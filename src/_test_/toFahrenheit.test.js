import { toFahrenheit } from '../toFahrenheit.js';

describe('test toFahrenheit', () => {
	// Test cases
	test('correct result for a valid number temperature', () => {
        expect(toFahrenheit(10)).toBeCloseTo(50);
    });
    test('correct result for a valid string temperature', () => {
        expect(toFahrenheit('-273.15')).toBeCloseTo(-459.67);
    });
    test('correct result for a non-valid number temperature', () => {
        expect(toFahrenheit(-273.16)).toEqual(NaN);
    });
    test('correct result for a non-valid string temperature', () => {
        expect(toFahrenheit('-273.16')).toEqual(NaN);
    });
    test('correct result for a non-valid string ', () => {
        expect(toFahrenheit('hello')).toEqual(NaN);
    });
    test('correct result for a undefined temperature', () => {
        expect(toFahrenheit(undefined)).toEqual(NaN);
    });
    test('correct result for a null temperature', () => {
        expect(toFahrenheit(null)).toEqual(NaN);
    });
    test('correct result for infinite temperature ', () => {
        expect(toFahrenheit(Infinity)).toEqual(NaN);
    });
});