import Web3 from 'web3';
import tokenAbi from './path/to/tokenAbi'; // Replace with the correct path to the token ABI

// Initialize Web3 provider
const web3 = new Web3(window.ethereum);

// Function to check if the Ethereum network is connected
export const checkNetworkConnection = async () => {
  try {
    await web3.eth.net.getId();
    return true;
  } catch (error) {
    console.error('Failed to connect to Ethereum network:', error);
    return false;
  }
};

// Function to fetch token balance for a specific address
export const getTokenBalance = async (tokenAddress, walletAddress) => {
  try {
    const contract = new web3.eth.Contract(tokenAbi, tokenAddress);
    const balance = await contract.methods.balanceOf(walletAddress).call();
    return balance;
  } catch (error) {
    console.error('Failed to fetch token balance:', error);
    return null;
  }
};

// Function to fetch transaction history for a specific address
export const getTransactionHistory = async (walletAddress) => {
  try {
    const history = await web3.eth.getTransactionReceipt(walletAddress);
    return history;
  } catch (error) {
    console.error('Failed to fetch transaction history:', error);
    return null;
  }
};

// Other Ethereum-related functions...

// Export the ethereumService object with the defined functions
export default {
  checkNetworkConnection,
  getTokenBalance,
  getTransactionHistory,
  // Other functions...
};
