import { isValidEmail, isValidPassword } from '../utils/validation';

describe('validation', () => {
  it('should validate email format', () => {
    const validEmail = 'test@example.com';
    const invalidEmail = 'invalid.email';
    expect(isValidEmail(validEmail)).toBe(true);
    expect(isValidEmail(invalidEmail)).toBe(false);
  });

  it('should validate password length', () => {
    const validPassword = 'strongpassword123';
    const invalidPassword = '123';
    expect(isValidPassword(validPassword)).toBe(true);
    expect(isValidPassword(invalidPassword)).toBe(false);
  });
});
