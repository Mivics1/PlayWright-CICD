import { Calculator } from '../src/calculator';

describe('Regression Tests - Calculator Module', () => {
  test('adds two numbers correctly', () => {
    expect(Calculator.add(2, 3)).toBe(5);
  });

  test('subtracts two numbers correctly', () => {
    expect(Calculator.subtract(10, 4)).toBe(6);
  });

  test('multiplies two numbers correctly', () => {
    expect(Calculator.multiply(3, 7)).toBe(21);
  });

  test('divides two numbers correctly', () => {
    expect(Calculator.divide(20, 4)).toBe(5);
  });

  test('throws error on division by zero', () => {
    expect(() => Calculator.divide(5, 0)).toThrow('Cannot divide by zero');
  });
});