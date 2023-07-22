import apiService from '../services/apiService';

// Mock the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: 'Mock API response' }),
  })
);

describe('apiService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch data from API', async () => {
    const response = await apiService.getData();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith('/api/data');
    expect(response).toEqual({ data: 'Mock API response' });
  });

  it('should handle API errors', async () => {
    // Mock the fetch function to return an error response
    global.fetch = jest.fn(() => Promise.reject('Mock API error'));

    try {
      await apiService.getData();
    } catch (error) {
      expect(error).toEqual('Mock API error');
    }
  });
});
