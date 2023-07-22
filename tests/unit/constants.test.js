import { API_BASE_URL, MAX_ITEMS_PER_PAGE } from '../utils/constants';

describe('constants', () => {
  it('should have correct API_BASE_URL', () => {
    expect(API_BASE_URL).toBe('https://api.example.com');
  });

  it('should have correct MAX_ITEMS_PER_PAGE', () => {
    expect(MAX_ITEMS_PER_PAGE).toBe(10);
  });
});
