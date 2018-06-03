import {canGetLicense} from '../canGetLicense.js';

describe('test canGetLicense', () =>{
  test('at age 17 I can NOT get license A', ()=>{
    expect(canGetLicense('A', 17)).toBe(false);
  });

  test('at age 20 I can get license B', ()=>{
    expect(canGetLicense('B', 20)).toBe(true);
  });

  test('at age 21 I can get license C', ()=>{
    expect(canGetLicense('C',21)).toBe(true);
  });

  test('throw error with "hej"-license', ()=>{
    expect(() => canGetLicense('hej', 21)).toThrow();
  });

  test('at age 21 I can NOT get license D', ()=>{
    expect(canGetLicense("D",21)).toBe(false);
  });

  test('at age 121 I can NOT get license BE', ()=>{
    expect(()=> canGetLicense("BE", 121)).toThrow();
  })
  test('throw error at age -5', ()=>{
    expect(()=> canGetLicense("A", -5)).toThrow();
  })
})
