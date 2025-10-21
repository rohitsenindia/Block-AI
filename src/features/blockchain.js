// Blockchain integration features
// Updated: 2025-10-21T06:13:22.288Z

class BlockchainHelper {
    constructor() {
        this.network = 'mainnet';
    }
    
    validateAddress(address) {
        return /^0x[a-fA-F0-9]{40}$/.test(address);
    }
    
    formatTransaction(tx) {
        return {
            hash: tx.hash,
            from: tx.from,
            to: tx.to,
            value: tx.value,
            timestamp: new Date().toISOString()
        };
    }
}

module.exports = BlockchainHelper;
