// Block AI Demo Script
// Generated: 2025-10-08T20:33:43.173Z

const GeminiHelper = require('../src/gemini-helper');
require('dotenv').config();

async function demo() {
    const helper = new GeminiHelper(process.env.GEMINI_API_KEY);
    
    try {
        const response = await helper.generateAIContent(
            "Explain blockchain AI integration in simple terms"
        );
        
        console.log('AI Response:', response);
    } catch (error) {
        console.error('Demo error:', error);
    }
}

// demo(); // Uncomment to run demo
module.exports = { demo };
