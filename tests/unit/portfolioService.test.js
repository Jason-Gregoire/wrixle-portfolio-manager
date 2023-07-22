import portfolioService from '../services/portfolioService';

describe('portfolioService', () => {
  it('should fetch portfolio data', async () => {
    const portfolioData = await portfolioService.fetchPortfolioData();
    expect(portfolioData).toBeDefined();
    // Add more assertions as needed based on the data structure returned
  });

  it('should add asset to portfolio', () => {
    const asset = { name: 'Asset1', quantity: 10, price: 100 };
    portfolioService.addAsset(asset);
    const portfolioData = portfolioService.getPortfolioData();
    // Assert that the asset is added to the portfolioData
    expect(portfolioData).toContainEqual(asset);
  });

  it('should remove asset from portfolio', () => {
    const asset = { name: 'Asset1', quantity: 10, price: 100 };
    portfolioService.addAsset(asset);
    const portfolioDataBeforeRemoval = portfolioService.getPortfolioData();
    expect(portfolioDataBeforeRemoval).toContainEqual(asset);

    portfolioService.removeAsset(asset);
    const portfolioDataAfterRemoval = portfolioService.getPortfolioData();
    // Assert that the asset is removed from the portfolioData
    expect(portfolioDataAfterRemoval).not.toContainEqual(asset);
  });
});
