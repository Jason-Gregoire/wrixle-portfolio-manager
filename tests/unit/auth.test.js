import { isAuthenticated, login, logout } from '../utils/auth';

describe('auth', () => {
  it('should authenticate user', () => {
    const user = { username: 'testuser', password: 'testpassword' };
    login(user);
    expect(isAuthenticated()).toBe(true);
  });

  it('should log out user', () => {
    const user = { username: 'testuser', password: 'testpassword' };
    login(user);
    logout();
    expect(isAuthenticated()).toBe(false);
  });
});
