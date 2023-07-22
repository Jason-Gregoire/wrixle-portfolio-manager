import authService from '../services/authService';

describe('authService', () => {
  afterEach(() => {
    // Clear any authentication state after each test
    authService.logout();
  });

  it('should authenticate user', () => {
    const user = { username: 'testuser', password: 'testpassword' };
    authService.login(user);
    expect(authService.isAuthenticated()).toBe(true);
  });

  it('should log out user', () => {
    const user = { username: 'testuser', password: 'testpassword' };
    authService.login(user);
    authService.logout();
    expect(authService.isAuthenticated()).toBe(false);
  });
});
