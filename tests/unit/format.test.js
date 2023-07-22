import { formatCurrency } from '../utils/format';

describe('format', () => {
  it('should format currency correctly', () => {
    const amount = 1234567.89;
    expect(formatCurrency(amount)).toBe('$1,234,567.89');
  });
});
