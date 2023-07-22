import { logInfo, logError } from '../utils/logger';

describe('logger', () => {
  it('should log info message', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    logInfo('This is an info message');
    expect(consoleSpy).toHaveBeenCalledWith('[INFO] This is an info message');
    consoleSpy.mockRestore();
  });

  it('should log error message', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();
    logError('This is an error message');
    expect(consoleSpy).toHaveBeenCalledWith('[ERROR] This is an error message');
    consoleSpy.mockRestore();
  });
});
