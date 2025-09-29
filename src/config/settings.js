// Configuration settings for Block AI
// Updated: 2025-09-29T04:59:48.721Z

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