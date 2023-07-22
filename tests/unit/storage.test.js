import { saveData, getData } from '../utils/storage';

describe('storage', () => {
  it('should save and retrieve data from local storage', () => {
    const data = { key: 'value' };
    saveData('testData', data);
    const retrievedData = getData('testData');
    expect(retrievedData).toEqual(data);
  });
});
