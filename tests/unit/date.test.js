import { formatDate } from '../utils/date';

describe('date', () => {
  it('should format date correctly', () => {
    const date = new Date('2023-06-24T12:34:56.789Z');
    expect(formatDate(date)).toBe('2023-06-24');
  });
});
