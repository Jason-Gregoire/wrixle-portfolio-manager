import { calculateTotal, capitalize } from '../utils/helpers';

describe('helpers', () => {
  it('should calculate total correctly', () => {
    const items = [10, 20, 30];
    expect(calculateTotal(items)).toBe(60);
  });

  it('should capitalize the first letter', () => {
    const text = 'hello world';
    expect(capitalize(text)).toBe('Hello world');
  });
});
