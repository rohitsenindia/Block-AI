// Configuration settings for Block AI
// Updated: 2025-10-24T14:13:23.108Z

module.exports = {
    apiSettings: {
        timeout: 30000,
        maxRetries: 3,
        version: '1.0.0'
    },
    
    aiSettings: {
        model: 'gemini-pro',
        temperature: 0.7,
        maxTokens: 1000
    },
    
    blockchainSettings: {
        network: 'mainnet',
        gasLimit: 21000
    }
};