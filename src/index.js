// Block AI Main Entry Point
const GeminiHelper = require('./gemini-helper');
require('dotenv').config();

console.log('🤖 Block AI Project Started');
console.log('📅', new Date().toISOString());

// Example usage
async function initialize() {
    try {
        const helper = new GeminiHelper(process.env.GEMINI_API_KEY);
        console.log('✅ Gemini Helper initialized successfully');
        
        // Test AI connection with simple prompt
        const testPrompt = "Say 'Block AI is working!' in a creative way";
        const response = await helper.generateAIContent(testPrompt);
        
        if (response) {
            console.log('🤖 AI Test Response:', response.substring(0, 100) + '...');
        }
        
    } catch (error) {
        console.log('💡 Tip: Run automation with: npm run automate');
        console.log('💡 Make sure GEMINI_API_KEY is set in .env file');
    }
}

initialize();

module.exports = {
    GeminiHelper,
    version: '1.0.0'
};
